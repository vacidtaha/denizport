import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const projectsFilePath = path.join(process.cwd(), 'public', 'projects.json');
const projectsDir = path.join(process.cwd(), 'public', 'projects');

// Klasör yoksa oluştur
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

// GET - Tüm projeleri getir
export async function GET() {
  try {
    if (!fs.existsSync(projectsFilePath)) {
      return NextResponse.json([]);
    }
    const data = fs.readFileSync(projectsFilePath, 'utf-8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    console.error('Projeler okunamadı:', error);
    return NextResponse.json([]);
  }
}

// POST - Yeni proje ekle
export async function POST(request: Request) {
  try {
    const { project, coverImageData, galleryImagesData } = await request.json();

    // Proje klasörü oluştur
    const projectFolder = path.join(projectsDir, project.slug);
    if (!fs.existsSync(projectFolder)) {
      fs.mkdirSync(projectFolder, { recursive: true });
    }

    // Kapak fotoğrafını kaydet
    const coverImagePath = path.join(projectFolder, 'cover.jpg');
    const coverBuffer = Buffer.from(coverImageData.split(',')[1], 'base64');
    fs.writeFileSync(coverImagePath, coverBuffer);

    // Galeri fotoğraflarını kaydet
    const galleryPaths: string[] = [];
    galleryImagesData.forEach((imageData: string, index: number) => {
      const imagePath = path.join(projectFolder, `gallery-${index + 1}.jpg`);
      const buffer = Buffer.from(imageData.split(',')[1], 'base64');
      fs.writeFileSync(imagePath, buffer);
      galleryPaths.push(`/projects/${project.slug}/gallery-${index + 1}.jpg`);
    });

    // Proje objesi güncelle
    const newProject = {
      ...project,
      coverImage: `/projects/${project.slug}/cover.jpg`,
      galleryImages: galleryPaths
    };

    // Mevcut projeleri oku
    let projects = [];
    if (fs.existsSync(projectsFilePath)) {
      const data = fs.readFileSync(projectsFilePath, 'utf-8');
      projects = JSON.parse(data);
    }

    // Yeni projeyi ekle
    projects.push(newProject);

    // Kaydet
    fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));

    return NextResponse.json({ success: true, project: newProject });
  } catch (error) {
    console.error('Proje kaydedilemedi:', error);
    return NextResponse.json({ success: false, error: 'Proje kaydedilemedi' }, { status: 500 });
  }
}

// DELETE - Proje sil
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    // Mevcut projeleri oku
    if (!fs.existsSync(projectsFilePath)) {
      return NextResponse.json({ success: false, error: 'Proje bulunamadı' }, { status: 404 });
    }

    const data = fs.readFileSync(projectsFilePath, 'utf-8');
    let projects = JSON.parse(data);

    // Silinecek projeyi bul
    const projectToDelete = projects.find((p: any) => p.id === id);
    if (!projectToDelete) {
      return NextResponse.json({ success: false, error: 'Proje bulunamadı' }, { status: 404 });
    }

    // Proje klasörünü sil
    const projectFolder = path.join(projectsDir, projectToDelete.slug);
    if (fs.existsSync(projectFolder)) {
      fs.rmSync(projectFolder, { recursive: true, force: true });
    }

    // Projeden çıkar
    projects = projects.filter((p: any) => p.id !== id);

    // Kaydet
    fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Proje silinemedi:', error);
    return NextResponse.json({ success: false, error: 'Proje silinemedi' }, { status: 500 });
  }
}


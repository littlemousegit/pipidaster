import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

// Обработчик GET запроса для получения пользователей
export async function GET() {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
    }
}

// Обработчик POST запроса для создания нового пользователя
export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        // Пример валидации данных перед созданием пользователя
        if (!data.fullName || !data.email) {
            return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
        }

        // Создание пользователя
        const user = await prisma.user.create({
            data,
        });

        return NextResponse.json(user);
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    }
}

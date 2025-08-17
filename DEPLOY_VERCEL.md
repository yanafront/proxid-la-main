# 🚀 Деплой ProxiD на Vercel - Пошаговая инструкция

## 📋 Предварительные требования

1. **GitHub аккаунт** с вашим репозиторием
2. **Vercel аккаунт** (можно создать через GitHub)
3. **Node.js** версии 18+ (для локальной сборки)

## 🔧 Шаг 1: Подготовка проекта

### 1.1 Убедитесь, что у вас есть файл `vercel.json`
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    },
    {
      "src": "client/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist/public"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "server/index.ts"
    },
    {
      "src": "/(.*)",
      "dest": "client/dist/public/$1"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

### 1.2 Проверьте скрипты в `package.json`
```json
{
  "scripts": {
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "vercel-build": "npm run build"
  }
}
```

## 🌐 Шаг 2: Создание аккаунта Vercel

1. Перейдите на [vercel.com](https://vercel.com)
2. Нажмите "Continue with GitHub"
3. Авторизуйтесь через GitHub
4. Разрешите доступ к репозиториям

## 📦 Шаг 3: Деплой проекта

### 3.1 Импорт репозитория
1. В Vercel Dashboard нажмите "New Project"
2. Выберите ваш GitHub репозиторий `ProxiD-landing-main`
3. Нажмите "Import"

### 3.2 Настройка проекта
```
Project Name: proxid-landing (или любое другое)
Framework Preset: Other
Root Directory: ./
Build Command: npm run build
Output Directory: dist/public
Install Command: npm install
```

### 3.3 Переменные окружения (Environment Variables)
```
NODE_ENV=production
PORT=3000
```

### 3.4 Настройки функций (Functions)
```
Node.js Version: 18.x
```

## ⚙️ Шаг 4: Настройка сборки

### 4.1 Build Command
```bash
npm run build
```

### 4.2 Output Directory
```
dist/public
```

### 4.3 Install Command
```bash
npm install
```

## 🚀 Шаг 5: Деплой

1. Нажмите "Deploy"
2. Дождитесь завершения сборки (обычно 2-5 минут)
3. Получите URL вашего сайта (например: `https://proxid-landing.vercel.app`)

## 🔄 Шаг 6: Автоматические деплои

После первого деплоя:
- Каждый push в `main` ветку автоматически запустит новый деплой
- Pull Request создаст Preview деплой
- Все изменения будут доступны автоматически

## 🐛 Решение возможных проблем

### Проблема: Build failed
**Решение:**
1. Проверьте логи сборки в Vercel Dashboard
2. Убедитесь, что все зависимости указаны в `package.json`
3. Проверьте версию Node.js (должна быть 18+)

### Проблема: API routes не работают
**Решение:**
1. Убедитесь, что в `vercel.json` правильно настроены маршруты
2. Проверьте, что сервер запускается на правильном порту

### Проблема: Статические файлы не загружаются
**Решение:**
1. Проверьте `Output Directory` в настройках
2. Убедитесь, что Vite собирает файлы в правильную папку

## 📱 Проверка деплоя

1. **Главная страница**: `https://your-domain.vercel.app/`
2. **Политика конфиденциальности**: `https://your-domain.vercel.app/privacy`
3. **Пользовательское соглашение**: `https://your-domain.vercel.app/terms`
4. **Контакты**: `https://your-domain.vercel.app/contact`
5. **API**: `https://your-domain.vercel.app/api`

## 🔧 Дополнительные настройки

### Кастомный домен
1. В Vercel Dashboard перейдите в "Settings" → "Domains"
2. Добавьте ваш домен
3. Настройте DNS записи

### SSL сертификат
- Автоматически предоставляется Vercel
- Работает для всех доменов

### CDN
- Автоматически настроен
- Файлы раздаются по всему миру

## 📊 Мониторинг

В Vercel Dashboard доступно:
- Статистика посещений
- Логи ошибок
- Производительность
- Аналитика

## 🎯 Готово!

Ваш сайт ProxiD теперь доступен по адресу:
`https://your-project-name.vercel.app`

---

**Полезные ссылки:**
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [GitHub Integration](https://vercel.com/docs/git)

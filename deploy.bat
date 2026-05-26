@echo off
echo Building the project...
call npm run build

if %errorlevel% equ 0 (
    echo Build successful!
    echo.
    echo To serve the build folder:
    echo 1. Install a static server: npm install -g serve
    echo 2. Run: serve -s build
    echo 3. Open http://localhost:3000 in your browser
) else (
    echo Build failed!
    exit /b 1
)
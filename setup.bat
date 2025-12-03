@echo off
REM My Space Furniture Next.js Setup Script for Windows

echo.
echo === My Space Furniture Next.js Setup ===
echo.

REM Check if package.json exists
if not exist "package.json" (
    echo Error: package.json not found. Make sure you're in the next-project directory.
    exit /b 1
)

echo Step 1: Creating public directories...
if not exist "public\hero" mkdir public\hero
if not exist "public\products" mkdir public\products
echo Done!
echo.

echo Step 2: Installing dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo Error: npm install failed
    exit /b 1
)
echo Done!
echo.

echo Step 3: Copying images from parent project...

REM Copy hero images
if exist "..\images\hero" (
    robocopy ..\images\hero public\hero *.webp >nul 2>&1
    if %ERRORLEVEL% LSS 2 (
        echo ✓ Hero images copied
    ) else (
        echo ⚠ No WebP images found in ..\images\hero\
    )
) else (
    echo ⚠ Hero images directory not found
)

REM Copy product images
if exist "..\images\products" (
    robocopy ..\images\products public\products *.jpg >nul 2>&1
    if %ERRORLEVEL% LSS 2 (
        echo ✓ Product images copied
    ) else (
        echo ⚠ No JPG images found in ..\images\products\
    )
) else (
    echo ⚠ Product images directory not found
)

REM Copy logo
if exist "..\images\logo\logo.png" (
    copy ..\images\logo\logo.png public\logo.png >nul
    echo ✓ Logo copied
) else (
    echo ⚠ Logo not found
)

REM Copy favicon
if exist "..\images\favicon\favicon.ico" (
    copy ..\images\favicon\favicon.ico public\favicon.ico >nul
    echo ✓ Favicon copied
) else (
    echo ⚠ Favicon not found
)

echo.
echo === Setup Complete! ===
echo.
echo Next steps:
echo 1. Run: npm run dev
echo 2. Open: http://localhost:3000
echo 3. Test all pages and make sure images load
echo.
echo For more information, see README.md or SETUP.md
echo.
pause

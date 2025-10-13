# 📸 Profile Picture Guide

## Where to Put Your Portfolio Picture

Place your profile picture in this folder: `assets/images/`

## 📋 Instructions

### Step 1: Add Your Photo
1. Copy your profile picture to this folder (`assets/images/`)
2. Rename it to something descriptive like:
   - `profile.jpg`
   - `my-photo.png`
   - `portfolio-pic.jpg`
   - Or keep your original filename

### Step 2: Update the HTML
Open `index.html` and find this line (around line 117):
```html
<img src="assets/images/your-photo.jpg" alt="Profile Picture" class="profile-photo">
```

Replace `your-photo.jpg` with your actual filename:
```html
<img src="assets/images/profile.jpg" alt="Profile Picture" class="profile-photo">
```

## 📐 Recommended Image Specifications

### Optimal Settings
- **Size**: 400x400 pixels or larger (square format)
- **Format**: JPG, PNG, or WebP
- **File Size**: Under 500KB for fast loading
- **Quality**: High quality, well-lit photo

### Image Requirements
- ✅ **Square aspect ratio** (1:1) works best
- ✅ **Professional headshot** or portrait style
- ✅ **Good lighting** and clear visibility
- ✅ **Centered face** in the frame
- ✅ **High resolution** (at least 400x400px)

## 🎨 How It Will Look

Your photo will be displayed as:
- **Circular frame** with gradient border
- **Responsive sizing**:
  - Desktop: 280x280px
  - Tablet: 220x220px  
  - Mobile: 180x180px
- **Hover effects**: Slight scale and rotation
- **Smooth transitions** and animations

## 🔄 Fallback System

If your image doesn't load or isn't found:
- A user icon (👤) will be displayed instead
- The design remains consistent
- No broken image placeholders

## 🖼️ Example Filenames

Good examples:
```
assets/images/profile.jpg
assets/images/john-doe.png
assets/images/portfolio-photo.jpg
assets/images/headshot.png
```

## 🛠️ Testing Your Image

1. Add your photo to this folder
2. Update the filename in `index.html`
3. Open the portfolio in your browser
4. Your photo should appear in the home section

## 💡 Tips for Best Results

### Photo Tips
- Use a **professional headshot** or high-quality selfie
- Ensure **good lighting** (natural light works best)
- **Smile naturally** and look at the camera
- Use a **clean, simple background**
- **Dress professionally** as this represents your portfolio

### Technical Tips
- **Optimize file size** using tools like TinyPNG or Squoosh
- **Test on different devices** to ensure it looks good
- **Use WebP format** for better compression (optional)
- **Keep a backup** of your original high-resolution photo

## 🚨 Troubleshooting

### Image Not Showing?
1. Check the filename matches exactly (case-sensitive)
2. Ensure the image is in the correct folder
3. Verify the file format is supported (JPG, PNG, WebP)
4. Check browser console for error messages

### Image Looks Blurry?
1. Use a higher resolution image (at least 400x400px)
2. Ensure the original photo is sharp and in focus
3. Avoid over-compressing the image

### Image Too Large?
1. Resize to 400x400px or 800x800px maximum
2. Compress using online tools
3. Consider converting to WebP format

## 📱 Mobile Optimization

Your image will automatically:
- Scale down on smaller screens
- Maintain aspect ratio
- Keep the circular frame
- Preserve hover effects (on touch devices)

---

**Ready to add your photo?** Just drop it in this folder and update the filename in `index.html`! 🚀
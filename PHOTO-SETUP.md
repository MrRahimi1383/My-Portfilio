# 📸 Quick Photo Setup Guide

## 🎯 Where to Put Your Portfolio Picture

### Location
```
assets/images/your-photo-name.jpg
```

### Steps to Add Your Photo

1. **Copy your photo** to the `assets/images/` folder
2. **Rename it** (optional) to something like:
   - `profile.jpg`
   - `my-photo.png` 
   - `headshot.jpg`

3. **Update the HTML** in `index.html` around line 117:
   ```html
   <!-- Change this line: -->
   <img src="assets/images/your-photo.jpg" alt="Profile Picture" class="profile-photo">
   
   <!-- To this (with your actual filename): -->
   <img src="assets/images/profile.jpg" alt="Profile Picture" class="profile-photo">
   ```

## 📐 Best Photo Specs

- **Size**: 400x400px or larger (square)
- **Format**: JPG, PNG, or WebP
- **Quality**: High resolution, well-lit
- **Style**: Professional headshot or portrait

## 🎨 How It Appears

Your photo will be displayed as:
- ✨ **Circular frame** with gradient border
- 📱 **Responsive** (280px desktop, 220px tablet, 180px mobile)
- 🎭 **Hover effects** (scale + rotation)
- 🔄 **Fallback icon** if image doesn't load

## 🚀 Quick Test

1. Add your photo to `assets/images/`
2. Update the filename in `index.html`
3. Open the portfolio in browser
4. Your photo should appear in the home section!

## 💡 Pro Tips

- Use a **square crop** for best results
- Ensure **good lighting** and **clear visibility**
- Keep file size **under 500KB** for fast loading
- Test on **mobile devices** too

---

**That's it!** Your professional photo will now be the centerpiece of your portfolio! 🌟
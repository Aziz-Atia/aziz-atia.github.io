# Portfolio Editing Guide

This guide will help you update your portfolio content without advanced technical knowledge. The portfolio has been designed with simplicity in mind, using a single HTML file.

## Table of Contents
1. [Basic Structure](#basic-structure)
2. [How to Update Your Content](#how-to-update-your-content)
3. [How to Add Your Photo](#how-to-add-your-photo)
4. [How to Change Themes](#how-to-change-themes)

## Basic Structure

The portfolio is organized in a single file for simplicity:

- `index.html` - Contains all of your portfolio content
- `css/styles.css` - Contains the styling for your portfolio
- `images/` folder - Where you can add your profile photo and other images

## How to Update Your Content

To update your portfolio content:

1. Open `index.html` in a text editor (like Notepad, TextEdit, or VS Code)
2. Find the section you want to update (there are clear comments for each section)
3. Edit the text between the HTML tags
4. Save the file

Each section in the file is clearly marked with comments like:

```html
<!-- Education Section -->
```

### Example: Adding a New Education Entry

To add a new education entry, find the Education Section, then copy an existing entry and modify it:

```html
<div class="edu-card">
    <div class="edu-icon"><i class="fas fa-graduation-cap"></i></div>
    <h3>Your Degree</h3>
    <p>Your Institution</p>
    <p>Graduation Year</p>
    <p>Additional Info (like CGPA)</p>
</div>
```

### Example: Adding a New Experience Entry

To add a new work experience entry, find the Experience Section, then copy an existing entry and modify it:

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <h3>Job Title</h3>
        <h4>Company Name</h4>
        <p class="timeline-date">Start Date - End Date</p>
        <ul>
            <li>Responsibility 1</li>
            <li>Responsibility 2</li>
            <li>Responsibility 3</li>
            <li>Responsibility 4</li>
            <li>Achievement or additional detail</li>
        </ul>
    </div>
</div>
```

### Example: Adding a New Skill

To add a new skill, find the Skills Section, locate the appropriate category, and add a new skill:

```html
<span>Your New Skill</span>
```

## How to Add Your Photo

To add or change your profile photo:

1. Name your photo `profile.jpg` or `profile.png`
2. Place it in the `images/` folder (replace the existing file if there is one)
3. Make sure the image is a square format for best results

## How to Change Themes

The portfolio comes with multiple color themes that you can easily switch between:

1. **Using the Theme Selector Dropdown**: 
   - The portfolio has a theme selector dropdown in the top-right corner
   - Simply select your preferred theme from the dropdown to instantly change the color scheme

2. **Setting a Default Theme**:
   - To permanently change the default theme, open `index.html` in a text editor
   - Find the `<body>` tag near the top of the file
   - Change the class from `class="theme-green"` to one of:
     - `class="theme-blue"` (Blue theme)
     - `class="theme-purple"` (Purple theme)
     - `class="theme-orange"` (Orange theme)
     - `class="theme-red"` (Red theme)

3. **Customizing Theme Colors**:
   - For more advanced users, you can customize the colors by editing `css/styles.css`
   - Look for the Theme Colors section at the top of the file
   - Modify the color codes (they start with #) to create your own custom theme

## Need More Help?

If you need to make more advanced changes, consider:

1. Looking at the HTML examples in each section
2. Using online HTML tutorials to understand the code structure
3. Asking a friend with web development experience

Remember to always back up your files before making changes! 
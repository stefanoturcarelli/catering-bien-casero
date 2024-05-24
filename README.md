# Catering Bien Casero 

Welcome to Catering Bien Casero - Your Go-to Food Catering Business Website!

## Overview

This repository contains the code for the Catering Bien Casero website, a platform designed to promote and provide information about a food catering services business based in Buenos Aires, Argentina.

## Demo

You can access the live website hosted on GitHub Pages: [Catering Bien Casero](https://cateringbiencasero.com)

## Considerations

My goal is to create a professional, responsive design business website that showcases their services and helps them connect with potential customers. 🌮🍰
Since the food catering industry is focused on presenting marvelous food confections I had to work with a professional photographer to ensure the images in this project were quality.

## Challenges

The biggest challenge while working on this project was finding the time with the client due to their crowded schedule. We had to work extra hours on weekends to keep up with the business's fast-paced environment.

## Acknowledgments 

I would like to acknowledge the following individuals for their contributions and support:

- Ileana Echeverria 
- Jonatan Moreira 
- Noelia Echeverria 

## Contact Information 

If you have any questions or would like to get in touch with me, please feel free to send an email to [catering-bien-casero@sgtr.dev](mailto:catering-bien-casero@sgtr.dev) 📩

## WhatsApp Button Implementation

HTML code

```html
<body>
  <!-- WhatsApp Button -->
  <a
    href="https://wa.me/5491160328777"
    target="_blank"
    rel="noopener noreferrer"
    class="whatsapp-button"
  >
    <i class="fab fa-whatsapp"></i>
  </a>
  <header></header>
</body>
```

CSS code

```css
.whatsapp-button {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background-color: #25d366;
  color: var(--white);
  border-radius: 50%;
  font-weight: 600;
  font-size: 2.5rem;
  text-decoration: none;
  box-shadow: #333 0px 0px 20px -15px;
  transition: all 0.3s ease-in-out;
}

.whatsapp-button:hover {
  background-color: #075e54;
  transition: all 0.3s ease-in-out;
}
```

## Project Goals 

- Create a professional and responsive design for the Catering Bien Casero website.
- Inform customers about their company's value proposition and services.
- Allow customers to book catering for their events.
- Provide an easily accessible catering menu.
- Enable customers to contact the owner and chef directly. 

## Future Goals 

In the future, I plan to implement a shopping experience where customers can order food catering packages tailored to the number of people they plan to host at their events and book their services. 

## Header Navigation

```html
<!-- Desktop Nav -->
<nav class="desktop-nav">
  <a href="index.html">Home</a>
  <a href="./services.html">Services</a>
  <a href="./about.html">About us</a>
  <a href="./contact.html">Contact us</a>
  <a href="./book.html">Book now</a>
</nav>
```

```css
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.container-flexbox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

header img {
  width: 90px;
}

.desktop-nav {
  display: flex;
  gap: 0.5rem;
}

.desktop-nav a {
  color: var(--black-900);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  background-color: #ffffff00;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
}

.desktop-nav a:hover {
  color: var(--white);
  background-color: var(--red-600);
  transition: all 0.3s ease-in-out;
}
```

## Screenshots

![image](https://github.com/stefanoturcarelli/catering-bien-casero/assets/67341828/769358c2-0f5a-4747-8970-6f8c8ea84907)

![image](https://github.com/stefanoturcarelli/catering-bien-casero/assets/67341828/43abdb23-6c17-478e-9b7c-77714467bf6a)

![image](https://github.com/stefanoturcarelli/catering-bien-casero/assets/67341828/67184fc2-d4ce-4f50-8dc5-56ef31327a6e)

![image](https://github.com/stefanoturcarelli/catering-bien-casero/assets/67341828/93ce3c2a-5f81-4aaf-aa4d-8ceb4cc90eac)


# Catering Bien Casero 🍽️

Welcome to Catering Bien Casero - Your Go-to Food Catering Business Website! 🎉

## Overview 📋

This repository contains the code for the Catering Bien Casero website, a platform designed to promote and provide information about a food catering services business based in Buenos Aires, Argentina.

## Usage 🌐

You can access the live website hosted on GitHub Pages: [Catering Bien Casero](https://stefanoturcarelli.github.io/catering-bien-casero/)

## Considerations

My goal is to create a professional, responsive design business website that showcases their services and helps them connect with potential customers. 🌮🍰
Since the food catering industry is focused on presenting marvelous food confections I had to work with a professional photographer to make sure the images in this project had excellent quality.

## Challenges

The biggest challenge while working on this project was finding the time with the client due to their crowded schedule. We had to work extra hours on weekends to keep up with the business fast pace environment.

## Acknowledgments 🙏

I would like to acknowledge the following individuals for their contributions and support:

- Ileana Echeverria 🙌
- Jonatan Moreira 🙌
- Noelia Echeverria 🙌

## Contact Information 📧

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

## Project Goals 🎯

- Create a professional and responsive design for the Catering Bien Casero website.
- Inform customers about their company's value proposition and services.
- Allow customers to book catering for their events.
- Provide an easily accessible catering menu.
- Enable customers to contact the owner and chef directly. 🍴👨‍🍳

## Future Goals 🚀

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

![Home page](https://raw.githubusercontent.com/stefanoturcarelli/catering-bien-casero/main/assets/img/Screenshot%202023-10-10%20134642.png)

![Flexbox cards](https://raw.githubusercontent.com/stefanoturcarelli/catering-bien-casero/main/assets/img/Screenshot%202023-10-10%20134703.png)

---

Thank you for visiting the Catering Bien Casero repository. I hope you find their services appealing! 😊

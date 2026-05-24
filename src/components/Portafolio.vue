<template>
  <div 
    :class="darkMode ? 'bg-black text-white' : 'bg-white text-black'"
    class="min-h-screen overflow-x-hidden transition-all duration-500"
  >

    <!-- NAVBAR -->
    <nav
      :class="darkMode 
        ? 'bg-black/20 border-white/5' 
        : 'bg-white/70 border-black/5'"
      class="fixed top-0 left-0 w-full z-50 backdrop-blur-sm border-b"
    >
      <div class="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">

        <!-- LOGO -->
<div class="flex items-center gap-3 cursor-pointer">

  <!-- ICON -->
  <div class="relative w-10 h-10 flex items-center justify-center">

    <!-- ESQUINAS -->
    <span class="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-purple-500 rounded-tl-sm"></span>

    <span class="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-500 rounded-tr-sm"></span>

    <span class="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-purple-500 rounded-bl-sm"></span>

    <span class="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-500 rounded-br-sm"></span>

    <!-- TEXTO -->
  <span
    :class="darkMode ? 'text-white' : 'text-black'"
      class="font-bold text-sm tracking-wider"
>
    BC
</span>

  </div>

  <!-- NOMBRE -->
  <h1
    :class="darkMode ? 'text-white' : 'text-black'"
    class="text-lg font-medium tracking-wide"
  >
    Braulio Contreras
  </h1>

</div>

        <!-- Links -->
        <ul class="flex gap-5 text-sm">

  <li>
    <a
      href="#"
      :class="darkMode 
        ? 'text-gray-300 hover:text-white' 
        : 'text-gray-600 hover:text-black'"
      class="transition duration-300"
    >
      Home
    </a>
  </li>

  <li>
    <a
      href="#projects"
      :class="darkMode 
        ? 'text-gray-300 hover:text-white' 
        : 'text-gray-600 hover:text-black'"
      class="transition duration-300"
    >
      Projects
    </a>
  </li>

  <li>
    <a
      href="#about"
      :class="darkMode 
        ? 'text-gray-300 hover:text-white' 
        : 'text-gray-600 hover:text-black'"
      class="transition duration-300"
    >
      About
    </a>
  </li>

  <li>
    <a
      href="#skills"
      :class="darkMode 
        ? 'text-gray-300 hover:text-white' 
        : 'text-gray-600 hover:text-black'"
      class="transition duration-300"
    >
      Skills
    </a>
  </li>

  <li>
    <a
      href="#contact"
      :class="darkMode 
        ? 'text-gray-300 hover:text-white' 
        : 'text-gray-600 hover:text-black'"
      class="transition duration-300"
    >
      Contact
    </a>
  </li>

</ul>

        <!-- Theme toggle -->
        <button @click="toggleTheme">
          <Moon
            v-if="darkMode"
            class="text-gray-300 hover:text-white"
            :size="18"
          />

          <Sun
            v-else
            class="text-gray-700 hover:text-black"
            :size="18"
          />
        </button>

      </div>
    </nav>

    <!-- HERO -->
    <section class="min-h-screen flex items-center px-10 pt-2 relative">

      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center w-full">

        <!-- Left -->
        <div>
          <p class="text-purple-400 text-2xl mb-4">
            Hola, soy
          </p>

          <h1 class="text-7xl font-bold leading-none">
            Braulio<span class="text-purple-500">.</span>
          </h1>

          <h2 class="text-5xl font-semibold text-purple-400 mt-4">
            Frontend Developer
          </h2>

          <p
            :class="darkMode ? 'text-gray-400' : 'text-gray-600'"
            class="mt-8 text-xl max-w-lg"
          >
            Creo experiencias web modernas, rápidas y escalables
            con tecnologías actuales.
          </p>
          <!-- Botónes -->
          <div class="flex gap-5 mt-10">

  <!-- Botón proyectos -->
  <a
    href="#projects"
    class="px-8 py-4 bg-purple-600 rounded-xl hover:bg-purple-700 transition inline-block"
  >
    Ver proyectos
  </a>

  <!-- Botón contacto -->
  <a
    href="#contact"
    :class="darkMode 
      ? 'border-gray-700 hover:border-white' 
      : 'border-gray-300 hover:border-black'"
    class="px-8 py-4 border rounded-xl transition inline-block"
  >
    Contactar
  </a>

</div>
        </div>

    <!-- Right -->
<div class="flex justify-center items-center">

  <div class="relative w-80 h-80 flex items-center justify-center">

    <!-- Glow -->
    <div
      :class="darkMode ? 'opacity-40' : 'opacity-20'"
      class="absolute w-72 h-72 bg-purple-600 rounded-full blur-[120px]"
    ></div>

    <!-- Centro -->
    <div
      :class="darkMode ? 'text-white' : 'text-black'"
      class="text-7xl z-20 font-bold"
    >
      &lt;/&gt;
    </div>





    <!-- ORBITA 1 -->
    <div class="orbit orbit-a">

      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
        class="w-14"
      />

    </div>





    <!-- ORBITA 2 -->
    <div class="orbit orbit-b">

      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        class="w-14"
      />

    </div>





    <!-- ORBITA 3 -->
    <div class="orbit orbit-c">

      <img
        src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
        class="w-14"
      />

    </div>





    <!-- ORBITA 4 -->
    <div class="orbit orbit-d">

      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        class="w-14 bg-white rounded-full p-1"
      />

    </div>

  </div>

</div>
      </div>
    </section>

    <!-- PROJECTS -->
<!-- PROYECTOS -->
<section id="projects" class="py-5 px-6 relative overflow-hidden">

  <!-- titulo -->
  <div class="text-center mb-16">

    <span class="text-purple-400 uppercase tracking-[0.25em] text-sm font-semibold">
      Proyectos destacados
    </span>

    <h2
      :class="darkMode ? 'text-white' : 'text-black'"
      class="text-5xl font-black mt-4"
    >
      Mis Proyectos
    </h2>

    <p
      :class="darkMode ? 'text-zinc-400' : 'text-zinc-600'"
      class="max-w-2xl mx-auto mt-5 text-lg"
    >
      Algunos proyectos frontend modernos desarrollados con Vue.js,
      Tailwind CSS y diseño UI premium.
    </p>

  </div>

  <!-- GRID -->
  <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">

    <!-- CARD -->
    <div
      @click="$router.push('/oftalmologia')"
      :class="darkMode
        ? 'bg-white/[0.03] border-white/10 hover:border-purple-500/40'
        : 'bg-white border-black/10 hover:border-purple-300'"
      class="group rounded-3xl overflow-hidden border backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
    >

      <!-- IMAGE -->
      <div class="relative overflow-hidden">

        <img
          src="/src/assets/Proyecto1/img-preview.png"
          class="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
        />

        <!-- overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

        <!-- badge -->
        <div class="absolute top-5 right-5">
          <span class="bg-purple-500 text-white text-xs px-4 py-2 rounded-full font-semibold shadow-lg">
            Destacado
          </span>
        </div>

      </div>

      <!-- CONTENT -->
      <div class="p-7">

        <h3
          :class="darkMode ? 'text-white' : 'text-black'"
          class="text-2xl font-bold mb-4"
        >
          Plataforma Oftalmológica Premium
        </h3>

        <p
          :class="darkMode ? 'text-zinc-400' : 'text-zinc-600'"
          class="leading-relaxed mb-6"
        >
          Aplicación web moderna para clínica oftalmológica con
          sistema de citas, catálogo visual y experiencia premium.
        </p>

        <!-- TAGS -->
        <div class="flex flex-wrap gap-3 mb-8">

          <span
            class="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-xl text-sm"
          >
            Vue.js
          </span>

          <span
            class="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-xl text-sm"
          >
            Tailwind CSS
          </span>

          <span
            class="bg-pink-500/10 text-pink-400 px-4 py-2 rounded-xl text-sm"
          >
            Vue Router
          </span>

        </div>

        <!-- BUTTONS -->
        <div class="flex items-center justify-between">

          <button
            class="bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition px-5 py-3 rounded-xl text-white font-semibold shadow-xl"
          >
            Ver proyecto
          </button>

          <button
            class="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition"
          >
            ↗
          </button>

        </div>

      </div>
    </div>





    <!-- CARD 2 -->
    <div
      :class="darkMode
        ? 'bg-white/[0.03] border-white/10 hover:border-cyan-500/40'
        : 'bg-white border-black/10 hover:border-cyan-300'"
      class="group rounded-3xl overflow-hidden border backdrop-blur-xl transition-all duration-500 hover:-translate-y-3"
    >

      <div class="relative overflow-hidden">

        <img
          src=""
          class="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
        />

        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

      </div>

      <div class="p-7">

        <h3
          :class="darkMode ? 'text-white' : 'text-black'"
          class="text-2xl font-bold mb-4"
        >
          Portfolio Personal
        </h3>

        <p
          :class="darkMode ? 'text-zinc-400' : 'text-zinc-600'"
          class="leading-relaxed mb-6"
        >
          Portfolio moderno para mostrar proyectos, habilidades y experiencia
          frontend con diseño premium.
        </p>

        <div class="flex flex-wrap gap-3 mb-8">

          <span
            class="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-xl text-sm"
          >
            Vue.js
          </span>

          <span
            class="bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-xl text-sm"
          >
            JavaScript
          </span>

          <span
            class="bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-xl text-sm"
          >
            Vite
          </span>

        </div>

        <div class="flex items-center justify-between">

          <button
            class="bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition px-5 py-3 rounded-xl text-white font-semibold shadow-xl"
          >
            Ver proyecto
          </button>

          <button
            class="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition"
          >
            ↗
          </button>

        </div>

      </div>
    </div>

  </div>

</section>


<!-- ABOUT ME -->
<section id="about" class="px-10 pb-24 scroll-mt-16">
  <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    <!-- Left -->
    <div>
      <p class="text-purple-500 text-sm uppercase tracking-widest mb-4">
        Sobre mí
      </p>

      <h2 class="text-5xl font-bold mb-8">
        Desarrollo web moderno
        <span class="text-purple-500">.</span>
      </h2>

      <p
        :class="darkMode ? 'text-gray-400' : 'text-gray-600'"
        class="text-lg leading-relaxed mb-6"
      >
        Trabajo principalmente con Vue.js, JavaScript,
        HTML5, CSS3, Tailwind CSS y Bootstrap para crear
        interfaces modernas, rápidas y responsivas.
      </p>

      <p
        :class="darkMode ? 'text-gray-400' : 'text-gray-600'"
        class="text-lg leading-relaxed mb-6"
      >
        También tengo experiencia desarrollando APIs con
        Node.js y Java, trabajando con MongoDB,
        SQL y aplicando fundamentos sólidos
        de programación orientada a objetos.
      </p>

      <p
        :class="darkMode ? 'text-gray-400' : 'text-gray-600'"
        class="text-lg leading-relaxed"
      >
        Me adapto rápido a nuevas tecnologías y trabajo
        cómodamente con documentación técnica en inglés.
        Actualmente busco oportunidades frontend o full stack junior.
      </p>
    </div>

    <!-- Right Side -->
<div class="grid grid-cols-2 gap-6">

  <!-- Frontend -->
  <div
    :class="darkMode 
      ? 'bg-zinc-900 border-white/5' 
      : 'bg-gray-100 border-black/5'"
    class="p-8 rounded-2xl border hover:scale-105 transition duration-300 text-center"
  >
    <div class="text-purple-500 text-4xl mb-4">
      &lt;/&gt;
    </div>

    <h3 class="text-xl font-bold mb-2">
      Frontend
    </h3>

    <p class="text-sm text-gray-400">
      Focused
    </p>
  </div>


  <!-- Full Stack -->
  <div
    :class="darkMode 
      ? 'bg-zinc-900 border-white/5' 
      : 'bg-gray-100 border-black/5'"
    class="p-8 rounded-2xl border hover:scale-105 transition duration-300 text-center"
  >
    <div class="text-purple-500 text-4xl mb-4">
      ⛁
    </div>

    <h3 class="text-xl font-bold mb-2">
      Full Stack
    </h3>

    <p class="text-sm text-gray-400">
      Capable
    </p>
  </div>


  <!-- API -->
  <div
    :class="darkMode 
      ? 'bg-zinc-900 border-white/5' 
      : 'bg-gray-100 border-black/5'"
    class="p-8 rounded-2xl border hover:scale-105 transition duration-300 text-center"
  >
    <div class="text-purple-500 text-4xl mb-4">
      ⤴
    </div>

    <h3 class="text-xl font-bold mb-2">
      API
    </h3>

    <p class="text-sm text-gray-400">
      Integration
    </p>
  </div>


  <!-- English -->
  <div
    :class="darkMode 
      ? 'bg-zinc-900 border-white/5' 
      : 'bg-gray-100 border-black/5'"
    class="p-8 rounded-2xl border hover:scale-105 transition duration-300 text-center"
  >
    <div class="text-purple-500 text-4xl mb-4">
      EN
    </div>

    <h3 class="text-xl font-bold mb-2">
      English
    </h3>

    <p class="text-sm text-gray-400">
      Documentation
    </p>
  </div>

</div>
  </div>
</section>


<!-- SKILLS -->
<section id="skills" class="px-10 pb-24 scroll-mt-16">
  <div 
    :class="darkMode 
      ? 'bg-black border-white/5' 
      : 'bg-gray-100 border-black/5'"
    class="max-w-7xl mx-auto rounded-3xl border p-10"
  >

    <!-- Title -->
    <div class="flex items-center gap-3 mb-10">
      <span class="text-purple-500 text-2xl">⌘</span>

      <h2 class="text-3xl font-bold">
        Skills
      </h2>
    </div>

    <!-- GRID -->
    <div class="grid md:grid-cols-3 gap-10">

      <!-- FRONTEND -->
      <div>
        <h3 class="text-xl font-semibold mb-6 border-b border-white/10 pb-3">
          Frontend
        </h3>

        <div class="grid grid-cols-3 gap-6 text-center">

          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" class="w-12 mx-auto mb-2">
            <p class="text-sm">Vue.js</p>
          </div>

          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" class="w-12 mx-auto mb-2">
            <p class="text-sm">JavaScript</p>
          </div>

          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="w-12 mx-auto mb-2">
            <p class="text-sm">HTML</p>
          </div>

          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" class="w-12 mx-auto mb-2">
            <p class="text-sm">CSS</p>
          </div>

          <div>
            <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" class="w-12 mx-auto mb-2">
            <p class="text-sm">Tailwind</p>
          </div>

          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" class="w-12 mx-auto mb-2">
            <p class="text-sm">Bootstrap</p>
          </div>
        </div>
      </div>

      <!-- BACKEND -->
      <div>
        <h3 class="text-xl font-semibold mb-6 border-b border-white/10 pb-3">
          Backend
        </h3>

        <div class="grid grid-cols-3 gap-6 text-center">

          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" class="w-12 mx-auto mb-2">
            <p class="text-sm">Node.js</p>
          </div>

          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" class="w-12 mx-auto mb-2 bg-white rounded-full">
            <p class="text-sm">Express</p>
          </div>

          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" class="w-12 mx-auto mb-2">
            <p class="text-sm">Java</p>
          </div>
        </div>
      </div>

      <!-- DATABASE -->
      <div>
        <h3 class="text-xl font-semibold mb-6 border-b border-white/10 pb-3">
          Database
        </h3>

        <div class="grid grid-cols-2 gap-6 text-center">

          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" class="w-12 mx-auto mb-2">
            <p class="text-sm">MongoDB</p>
          </div>

          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" class="w-12 mx-auto mb-2">
            <p class="text-sm">SQL / MySQL</p>
          </div>
        </div>
      </div>

      <!-- TOOLS -->
      <div>
        <h3 class="text-xl font-semibold mb-6 border-b border-white/10 pb-3">
          Herramientas
        </h3>

        <div class="grid grid-cols-4 gap-6 text-center">

          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" class="w-12 mx-auto mb-2 bg-white rounded-full p-1">
            <p class="text-sm">GitHub</p>
          </div>

          <div>
            <img src="https://vitejs.dev/logo.svg" class="w-12 mx-auto mb-2">
            <p class="text-sm">Vite</p>
          </div>

          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" class="w-12 mx-auto mb-2">
            <p class="text-sm">VS Code</p>
          </div>

          <div>
            <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" class="w-12 mx-auto mb-2">
            <p class="text-sm">Postman</p>
          </div>
        </div>
      </div>

      <!-- CONCEPTS -->
      <div>
        <h3 class="text-xl font-semibold mb-6 border-b border-white/10 pb-3">
          Conceptos
        </h3>

        <div class="grid grid-cols-4 gap-6 text-center">

          <div>
            <div class="text-3xl mb-2">⚙️</div>
            <p class="text-sm">OOP</p>
          </div>

          <div>
            <div class="text-3xl mb-2">🔗</div>
            <p class="text-sm">REST APIs</p>
          </div>

          <div>
            <div class="text-3xl mb-2">☁️</div>
            <p class="text-sm">APIs</p>
          </div>

          <div>
            <div class="text-3xl mb-2">EN</div>
            <p class="text-sm">English</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
<!-- CONTACT -->
<section id="contact" class="px-10 pb-24 scroll-mt-16">
  <div 
    :class="darkMode 
      ? 'bg-zinc-900 border-white/5' 
      : 'bg-gray-100 border-black/5'"
    class="max-w-7xl mx-auto rounded-3xl border p-12"
  >

    <div class="grid md:grid-cols-2 gap-12 items-center">

      <!-- LEFT SIDE -->
      <div>
        <p class="text-purple-500 text-sm uppercase tracking-widest mb-4">
          Contact
        </p>

        <h2 class="text-5xl font-bold mb-6 leading-tight">
          Let's build something
          <span class="text-purple-500">together.</span>
        </h2>

        <p
          :class="darkMode ? 'text-gray-400' : 'text-gray-600'"
          class="text-lg leading-relaxed max-w-lg"
        >
          Actualmente busco oportunidades remotas o proyectos freelance
          donde pueda aportar en frontend o full stack development.
        </p>
      </div>

      <!-- RIGHT SIDE -->
      <div class="space-y-6">

        <!-- Email -->
        <a
          href="mailto:tuemail@gmail.com"
          :class="darkMode 
            ? 'bg-black hover:bg-purple-600' 
            : 'bg-white hover:bg-purple-600 hover:text-white'"
          class="block p-6 rounded-2xl transition duration-300"
        >
          <h3 class="font-bold text-lg">Email</h3>
          <p class="text-sm mt-2">bionicle3140@gmail.com</p>
        </a>

        <!-- GitHub -->
        <a
          href="https://github.com/"
          target="_blank"
          :class="darkMode 
            ? 'bg-black hover:bg-purple-600' 
            : 'bg-white hover:bg-purple-600 hover:text-white'"
          class="block p-6 rounded-2xl transition duration-300"
        >
          <h3 class="font-bold text-lg">GitHub</h3>
          <p class="text-sm mt-2">https://github.com/bionicle3140-dev</p>
        </a>

        <!-- LinkedIn -->
        <a
          href="https://linkedin.com/"
          target="_blank"
          :class="darkMode 
            ? 'bg-black hover:bg-purple-600' 
            : 'bg-white hover:bg-purple-600 hover:text-white'"
          class="block p-6 rounded-2xl transition duration-300"
        >
          <h3 class="font-bold text-lg">LinkedIn</h3>
          <p class="text-sm mt-2">linkedin.com/in/tuusuario</p>
        </a>

      </div>

    </div>
  </div>
</section>
<!-- TRABAJEMOS JUNTOS -->
<section class="py-15 px-6 relative overflow-hidden">

  <!-- background glow -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 blur-[180px] rounded-full"></div>

  <div
    :class="darkMode
      ? 'bg-white/[0.03] border-white/10'
      : 'bg-white border-black/10'"
    class="relative max-w-7xl mx-auto rounded-[40px] border backdrop-blur-2xl overflow-hidden"
  >

    <div class="grid lg:grid-cols-2 gap-12 items-center p-10 lg:p-20">

      <!-- LEFT -->
      <div>

        <span class="text-purple-400 uppercase tracking-[0.25em] text-sm font-semibold">
          Trabajemos juntos
        </span>

        <h2
          :class="darkMode ? 'text-white' : 'text-black'"
          class="text-5xl lg:text-6xl font-black mt-6 leading-tight"
        >
          ¿Tienes una idea?
          <span class="text-purple-500">
            Hagámosla realidad
          </span>
        </h2>

        <p
          :class="darkMode ? 'text-zinc-400' : 'text-zinc-600'"
          class="mt-8 text-lg leading-relaxed max-w-xl"
        >
          Me especializo en crear interfaces modernas, experiencias premium
          y aplicaciones frontend visualmente atractivas utilizando Vue.js,
          Tailwind CSS y diseño UI/UX moderno.
        </p>

        <!-- STATS -->
        <div class="flex flex-wrap gap-8 mt-10">

          <div>
            <h3 class="text-4xl font-black text-purple-500">
              2+
            </h3>

            <p
              :class="darkMode ? 'text-zinc-400' : 'text-zinc-600'"
              class="mt-2"
            >
              Proyectos desarrollados
            </p>
          </div>

          <div>
            <h3 class="text-4xl font-black text-cyan-400">
              UI
            </h3>

            <p
              :class="darkMode ? 'text-zinc-400' : 'text-zinc-600'"
              class="mt-2"
            >
              Diseño moderno
            </p>
          </div>

          <div>
            <h3 class="text-4xl font-black text-pink-400">
              Vue
            </h3>

            <p
              :class="darkMode ? 'text-zinc-400' : 'text-zinc-600'"
              class="mt-2"
            >
              Frontend moderno
            </p>
          </div>

        </div>

      </div>

      <!-- RIGHT -->
      <div
        :class="darkMode
          ? 'bg-black/30 border-white/10'
          : 'bg-gray-50 border-black/10'"
        class="rounded-[32px] border p-8 backdrop-blur-xl"
      >

        <h3
          :class="darkMode ? 'text-white' : 'text-black'"
          class="text-3xl font-bold mb-8"
        >
          Contáctame
        </h3>

        <!-- FORM -->
        <div class="space-y-5">

          <!-- nombre -->
          <input
            type="text"
            placeholder="Tu nombre"
            :class="darkMode
              ? 'bg-white/5 border-white/10 text-white placeholder:text-zinc-500'
              : 'bg-white border-black/10 text-black'"
            class="w-full rounded-2xl border px-5 py-4 outline-none focus:border-purple-500 transition"
          />

          <!-- correo -->
          <input
            type="email"
            placeholder="Correo electrónico"
            :class="darkMode
              ? 'bg-white/5 border-white/10 text-white placeholder:text-zinc-500'
              : 'bg-white border-black/10 text-black'"
            class="w-full rounded-2xl border px-5 py-4 outline-none focus:border-purple-500 transition"
          />

          <!-- mensaje -->
          <textarea
            rows="5"
            placeholder="Cuéntame sobre tu proyecto..."
            :class="darkMode
              ? 'bg-white/5 border-white/10 text-white placeholder:text-zinc-500'
              : 'bg-white border-black/10 text-black'"
            class="w-full rounded-2xl border px-5 py-4 outline-none focus:border-purple-500 transition resize-none"
          ></textarea>

          <!-- button -->
          <button
            class="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-[1.02] transition-all duration-300 text-white py-4 rounded-2xl font-semibold shadow-2xl"
          >
            Enviar mensaje →
          </button>

        </div>

        <!-- social -->
        <div class="flex items-center gap-4 mt-8">

          <a
            href="#"
            class="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white hover:bg-purple-500 transition"
          >
            💻
          </a>

          <a
            href="#"
            class="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white hover:bg-blue-500 transition"
          >
            in
          </a>

          <a
            href="#"
            class="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 transition"
          >
            ✉
          </a>

        </div>

      </div>

    </div>

  </div>

</section>

<!-- MODAL FULLSCREEN -->
<!-- FOOTER -->
<footer
  :class="darkMode 
    ? 'bg-black border-white/5' 
    : 'bg-white border-black/5'"
  class="border-t px-10 py-16"
>
  <div class="max-w-7xl mx-auto">

    <!-- Top Section -->
    <div class="grid md:grid-cols-3 gap-10 items-start pb-10 border-b border-white/10">

      <!-- Left -->
      <div>
        <h2 class="text-3xl font-bold mb-3">
          Braulio<span class="text-purple-500">.</span>
        </h2>

        <p
          :class="darkMode ? 'text-gray-400' : 'text-gray-600'"
          class="max-w-sm leading-relaxed"
        >
          Frontend developer enfocado en construir interfaces modernas,
          experiencias limpias y aplicaciones web funcionales.
        </p>
      </div>

      <!-- Center -->
      <div>
        <h3 class="font-semibold mb-4 text-purple-500">
          Navegación
        </h3>

        <div class="flex flex-col gap-3">

          <a href="#projects" class="hover:text-purple-500 transition">
            Projects
          </a>

          <a href="#about" class="hover:text-purple-500 transition">
            About
          </a>

          <a href="#skills" class="hover:text-purple-500 transition">
            Skills
          </a>

          <a href="#contact" class="hover:text-purple-500 transition">
            Contact
          </a>

        </div>
      </div>

      <!-- Right -->
      <div>
        <h3 class="font-semibold mb-4 text-purple-500">
          Connect
        </h3>

        <div class="flex flex-col gap-3">

          <a
            href="https://github.com/tuusuario"
            target="_blank"
            class="hover:text-purple-500 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            class="hover:text-purple-500 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:tuemail@gmail.com"
            class="hover:text-purple-500 transition"
          >
            Email
          </a>

        </div>
      </div>

    </div>

    <!-- Bottom Section -->
    <div
      :class="darkMode ? 'text-gray-500' : 'text-gray-600'"
      class="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
    >
      <p>
        © 2026 Braulio. All rights reserved.
      </p>

      <p>
        Built with Vue + Tailwind + Vite
      </p>
    </div>

  </div>
</footer>
  </div>
</template>

<script>
import { Moon, Sun } from 'lucide-vue-next'
import Ofta from './Projecto1/Portafolio2.vue'

export default {
  name: "App",

  components: {
    Moon,
    Sun,
  },

  data() {
    return {
      darkMode: true,
    }
  },

  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode
    }
  }
}
</script>
<style scoped>

/* BASE */

.orbit {
  position: absolute;
  width: 100%;
  height: 100%;
}

/* ICONOS */

.orbit img {
  position: absolute;
}

/* ORBITA A */

.orbit-a {
  animation: orbitRotate 40s linear infinite;
}

.orbit-a img {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

/* ORBITA B */

.orbit-b {
  animation: orbitRotate 40s linear infinite;
}

.orbit-b img {
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

/* ORBITA C */

.orbit-c {
  animation: orbitRotate 40s linear infinite;
}

.orbit-c img {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

/* ORBITA D */

.orbit-d {
  animation: orbitRotate 40s linear infinite;
}

.orbit-d img {
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

/* ANIMACION */

@keyframes orbitRotate {

  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }

}

</style>
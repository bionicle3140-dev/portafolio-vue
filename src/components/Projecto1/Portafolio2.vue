<template>
  <div 
    :class="darkMode ? 'bg-black text-white' : 'bg-white text-black'"
    class="min-h-screen overflow-x-hidden transition-all duration-500"
  >
  <!-- Contenedor principal que establece el fondo negro global -->
  <div class="bg-white text-white min-h-screen overflow-hidden font-sans">

  
      
<!-- 1. NAVBAR - TRANSPARENTE con efecto borroso (Glassmorphism) -->
      <!-- Navigation Links (Desktop) -->
<nav
  :class="darkMode 
    ? 'bg-black/20 border-white/5' 
    : 'bg-white/70 border-black/5'"
  class="fixed top-0 left-0 w-full z-50 backdrop-blur-sm border-b"
>
  <div class="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">

    <!-- Logo -->
    <div class="text-2xl font-extrabold tracking-wider text-white cursor-pointer">
      <span class="text-[#4F46E5] font-black">A</span>LIANZA
      <span class="text-[#4F46E5]">.</span>
    </div>

    <!-- LINKS DESKTOP/TABLET -->
    <ul class="hidden md:flex gap-5 text-sm">

      <a href="#inicio"
        class="text-white hover:text-purple-400 transition duration-200 border-b-2 border-transparent hover:border-purple-500 pb-1">
        Inicio
      </a>

      <a href="#servicios"
        class="text-white hover:text-purple-400 transition duration-200 border-b-2 border-transparent hover:border-purple-500 pb-1">
        Servicios
      </a>

      <a href="#cirugias"
        class="text-white hover:text-purple-400 transition duration-200 border-b-2 border-transparent hover:border-purple-500 pb-1">
        Cirugías
      </a>

      <a href="#armazones"
        class="text-white hover:text-purple-400 transition duration-200 border-b-2 border-transparent hover:border-purple-500 pb-1">
        Armazones
      </a>

      <a href="#nosotros"
        class="text-white hover:text-purple-400 transition duration-200 border-b-2 border-transparent hover:border-purple-500 pb-1">
        Nosotros
      </a>

      <a href="#contacto"
        class="text-white hover:text-purple-400 transition duration-200 border-b-2 border-transparent hover:border-purple-500 pb-1">
        Contacto
      </a>

    </ul>

    <!-- BOTONES DESKTOP/TABLET -->
    <div class="hidden md:flex items-center gap-3">

      <!-- Agendar -->
      <button
        @click="showModal = true"
        class="border border-white/30 text-white px-4 py-2 rounded-xl text-sm hover:bg-white/10 transition"
      >
        Agendar cita
      </button>

      <!-- WhatsApp -->
      <a
        href="https://wa.me/5215512345678"
        target="_blank"
        class="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-green-500 transition"
      >
        💬
      </a>

    </div>

    <!-- BOTÓN MOBILE -->
    <button
      @click="mobileMenu = !mobileMenu"
      class="md:hidden text-white text-2xl"
    >
      ☰
    </button>

  </div>

  <!-- MENÚ MOBILE -->
  <div
    v-if="mobileMenu"
    class="md:hidden bg-black/95 backdrop-blur-lg px-6 py-6"
  >
    <div class="flex flex-col gap-5 text-white text-sm">

      <a href="#inicio" @click="mobileMenu = false">Inicio</a>
      <a href="#servicios" @click="mobileMenu = false">Servicios</a>
      <a href="#cirugias" @click="mobileMenu = false">Cirugías</a>
      <a href="#armazones" @click="mobileMenu = false">Armazones</a>
      <a href="#nosotros" @click="mobileMenu = false">Nosotros</a>
      <a href="#contacto" @click="mobileMenu = false">Contacto</a>

      <!-- Agendar -->
      <button
        @click="showModal = true"
        class="bg-blue-600 py-3 rounded-xl"
      >
        Agendar cita
      </button>

      <!-- WhatsApp -->
      <a
        href="https://wa.me/5215512345678"
        target="_blank"
        class="bg-green-500 py-3 rounded-xl text-center"
      >
        WhatsApp
      </a>

    </div>
  </div>
</nav>
      <!-- Hero) -->
<!-- HERO -->
<section
  id="inicio"
  class="relative min-h-screen w-full overflow-hidden"
>
  <!-- Imagen -->
  <img
    src="\src\assets\hero-eye.jpg"
    alt="Oftalmología"
    class="absolute inset-0 w-full h-full object-cover"
  />

  <!-- Overlay -->
  <div class="absolute inset-0 bg-black/50"></div>

  <!-- Hero content -->
  <div
    class="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex items-center"
  >
    <div class="max-w-2xl text-white">
      
      <p class="text-blue-500 font-semibold uppercase mb-6">
        Cuidamos tu visión
      </p>

      <h1 class="text-5xl md:text-7xl font-bold leading-tight mb-6">
        Experiencia, tecnología y
        <span class="text-blue-500">confianza</span>
        en cada mirada
      </h1>

      <p class="text-gray-200 text-lg mb-8">
        Soluciones integrales para el cuidado de tus ojos.
      </p>

      <div class="flex gap-4 flex-col sm:flex-row">
        <a
          @click="showModal = true"
          class="bg-blue-600 px-8 py-4 rounded-xl hover:bg-blue-700 transition"
        >
          Agendar cita
        </a>

        <a
          href="#cirugias"
          class="border border-white/30 px-8 py-4 rounded-xl hover:bg-white/10 transition"
        >
          Ver cirugías
        </a>
      </div>

    </div>
  </div>
</section>

<!-- FEATURES SECTION (ya NO flotante) -->
<section class="bg-white py-12 px-6">
  <div class="max-w-6xl mx-auto">

    <div class="grid md:grid-cols-4 gap-6">

       <!-- Card 1: Especialistas certificados (Eleva el blanco sobre el negro) -->
          <div class="p-8 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center transition duration-300 hover:border-[#4F46E5]">
            <!-- Icono (Persona - tonalidad de acento) -->
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-[#4F46E5] mb-3"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <h3 class="text-lg font-semibold mb-1 text-gray-900">Especialistas certificados</h3>
            <p class="text-sm text-gray-500">Oftalmólogos con amplia experiencia y actualización constante.</p>
          </div>

          <!-- Card 2: Tecnología de vanguardia -->
          <div class="p-8 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center transition duration-300 hover:border-[#4F46E5]">
            <!-- Icono (Escudo - tonalidad de acento) -->
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-[#4F46E5] mb-3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"/></svg>
            <h3 class="text-lg font-semibold mb-1 text-gray-900">Tecnología de vanguardia</h3>
            <p class="text-sm text-gray-500">Equipos de última generación para diagnósticos precisos y seguros.</p>
          </div>

          <!-- Card 3: Atención personalizada -->
          <div class="p-8 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center transition duration-300 hover:border-[#4F46E5]">
            <!-- Icono (Corazón - tonalidad de acento) -->
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-[#4F46E5] mb-3"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
            <h3 class="text-lg font-semibold mb-1 text-gray-900">Atención personalizada</h3>
            <p class="text-sm text-gray-500">Tratamientos adaptados a las necesidades específicas de cada paciente.</p>
          </div>

          <!-- Card 4: Agenda fácil y rápida -->
          <div class="p-8 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center transition duration-300 hover:border-[#4F46E5]">
            <!-- Icono (Reloj - tonalidad de acento) -->
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-[#4F46E5] mb-3"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <h3 class="text-lg font-semibold mb-1 text-gray-900">Agenda fácil y rápida</h3>
            <p class="text-sm text-gray-500">Reserva tu cita en minutos por WhatsApp o formulario online.</p>
          </div>

    </div>
  </div>
</section>
<section id="servicios" class="py-24 bg-white px-6">
  <div class="max-w-7xl mx-auto">

    <!-- Header -->
    <div class="text-center mb-16">
      <p class="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">
        Nuestros Servicios
      </p>

      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
        Soluciones integrales para tu salud visual
      </h2>

      <p class="text-gray-600 max-w-2xl mx-auto text-lg">
        Desde consultas preventivas hasta procedimientos especializados
        y armazones premium.
      </p>
    </div>

    <!-- Services Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      <!-- Servicio 1 -->
      <div class="bg-[#f8fafc] rounded-3xl p-8 hover:shadow-xl transition">
        <div class="text-4xl mb-5">👁️</div>

        <h3 class="text-xl font-bold text-gray-900 mb-3">
          Consulta oftalmológica
        </h3>

        <p class="text-gray-600">
          Evaluación completa de la salud visual y diagnóstico preventivo.
        </p>
      </div>

      <!-- Servicio 2 -->
      <div class="bg-[#f8fafc] rounded-3xl p-8 hover:shadow-xl transition">
        <div class="text-4xl mb-5">🔬</div>

        <h3 class="text-xl font-bold text-gray-900 mb-3">
          Estudios especializados
        </h3>

        <p class="text-gray-600">
          Exámenes avanzados para detectar problemas visuales.
        </p>
      </div>

      <!-- Servicio 3 -->
      <div class="bg-[#f8fafc] rounded-3xl p-8 hover:shadow-xl transition">
        <div class="text-4xl mb-5">⚕️</div>

        <h3 class="text-xl font-bold text-gray-900 mb-3">
          Cirugías
        </h3>

        <p class="text-gray-600">
          Procedimientos modernos con especialistas certificados.
        </p>
      </div>

      <!-- Servicio 4 -->
      <div class="bg-[#f8fafc] rounded-3xl p-8 hover:shadow-xl transition">
        <div class="text-4xl mb-5">🕶️</div>

        <h3 class="text-xl font-bold text-gray-900 mb-3">
          Venta de armazones
        </h3>

        <p class="text-gray-600">
          Marcas premium y opciones para todos los estilos.
        </p>
      </div>

    </div>
  </div>
</section>

<section id="cirugias" class="py-20 bg-white px-6">
  <div class="max-w-7xl mx-auto">

    <div class="grid lg:grid-cols-5 gap-6 items-start">

      <!-- LEFT CONTENT -->
      <div class="lg:col-span-1">

        <p class="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
          Cirugías
        </p>

        <h2 class="text-4xl font-bold text-gray-900 leading-tight mb-4">
          Soluciones que transforman tu vida
        </h2>

        <p class="text-gray-500 text-sm leading-relaxed mb-6">
          Contamos con procedimientos quirúrgicos oftalmológicos
          seguros, efectivos y con altos estándares de calidad.
        </p>

        <a
          @click="showCirugiasModal = true"
          class="inline-block border border-blue-500 text-blue-600 px-5 py-3 rounded-xl hover:bg-blue-50 transition"
        >
          Ver todas las cirugías →
        </a>
      </div>

      <!-- SURGERY CARDS -->
      <div class="lg:col-span-4 grid md:grid-cols-2 lg:grid-cols-4 gap-5">

        <!-- Card 1 -->
        <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition">

          <img
            src="\src\assets\Proyecto1\Lasik.png"
            class="w-full h-40 object-cover"
            alt="Cirugía LASIK"
          />

          <div class="p-5">
            <h3 class="text-lg font-bold text-gray-900 mb-2">
              Cirugía LASIK
            </h3>

            <p class="text-gray-500 text-sm mb-4">
              Corrige miopía, hipermetropía y astigmatismo
              para mejorar tu visión.
            </p>

            <a href="#" class="text-blue-600 text-sm font-semibold">
              Más información →
            </a>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition">

          <img
            src="\src\assets\Proyecto1\Catarata.png"
            class="w-full h-40 object-cover"
            alt="Cataratas"
          />

          <div class="p-5">
            <h3 class="text-lg font-bold text-gray-900 mb-2">
              Cirugía de Cataratas
            </h3>

            <p class="text-gray-500 text-sm mb-4">
              Recupera la nitidez de tu visión
              con lentes intraoculares avanzados.
            </p>

            <a href="#" class="text-blue-600 text-sm font-semibold">
              Más información →
            </a>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition">

          <img
            src="\src\assets\Proyecto1\Retina-v.png"
            class="w-full h-40 object-cover"
            alt="Retina"
          />

          <div class="p-5">
            <h3 class="text-lg font-bold text-gray-900 mb-2">
              Retina y Vítreo
            </h3>

            <p class="text-gray-500 text-sm mb-4">
              Tratamientos especializados
              para enfermedades de retina.
            </p>

            <a href="#" class="text-blue-600 text-sm font-semibold">
              Más información →
            </a>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition">

          <img
            src="\src\assets\Proyecto1\Refractiva.png"
            class="w-full h-40 object-cover"
            alt="Refractiva"
          />

          <div class="p-5">
            <h3 class="text-lg font-bold text-gray-900 mb-2">
              Cirugía Refractiva
            </h3>

            <p class="text-gray-500 text-sm mb-4">
              Técnicas avanzadas para corregir
              problemas visuales permanentes.
            </p>

            <a href="#" class="text-blue-600 text-sm font-semibold">
              Más información →
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
   
 <section id="armazones" class="py-20 bg-[#f8fafc] px-6">
  <div class="max-w-7xl mx-auto">

    <!-- HEADER -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

      <div>
        <p class="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">
          Catálogo de Armazones
        </p>

        <h2 class="text-4xl font-bold text-gray-900">
          Estilo que se adapta a ti
        </h2>
      </div>

      <a
        href="#contacto"
        class="text-blue-600 font-semibold mt-4 md:mt-0"
      >
        Ver catálogo completo →
      </a>
    </div>

    <!-- FILTERS -->
    <div class="flex flex-col lg:flex-row gap-4 justify-between mb-10">

      <!-- Left filters -->
      <div class="flex flex-wrap gap-3">

        <!-- Todos -->
        <button
          @click="selectedCategory = 'Todos'"
          :class="selectedCategory === 'Todos'
            ? 'bg-blue-600 text-white'
            : 'bg-white border text-gray-600'"
          class="px-4 py-2 rounded-lg text-sm"
        >
          Todos
        </button>

        <!-- Marca -->
        <button
          @click="selectedCategory = 'Marca'"
          :class="selectedCategory === 'Marca'
            ? 'bg-blue-600 text-white'
            : 'bg-white border text-gray-600'"
          class="px-4 py-2 rounded-lg text-sm"
        >
          Marca
        </button>
        
        <button
          @click="selectedCategory = 'Unisex'"
          :class="selectedCategory === 'Unisex'
            ? 'bg-blue-600 text-white'
            : 'bg-white border text-gray-600'"
          class="px-4 py-2 rounded-lg text-sm"
>
            Unisex
          </button>

        <!-- Hombre -->
        <button
          @click="selectedCategory = 'Hombre'"
          :class="selectedCategory === 'Hombre'
            ? 'bg-blue-600 text-white'
            : 'bg-white border text-gray-600'"
          class="px-4 py-2 rounded-lg text-sm"
        >
          Hombre
        </button>

        <!-- Mujer -->
        <button
          @click="selectedCategory = 'Mujer'"
          :class="selectedCategory === 'Mujer'
            ? 'bg-blue-600 text-white'
            : 'bg-white border text-gray-600'"
          class="px-4 py-2 rounded-lg text-sm"
        >
          Mujer
        </button>

      </div>

      <!-- Search -->
      <div class="w-full lg:w-72">
  <input
    v-model="searchQuery"
    type="text"
    placeholder="Buscar armazones..."
    class="w-full px-5 py-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-white shadow-lg text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 transition"
  />
</div>

    </div>

    <!-- PRODUCTS GRID -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="bg-white rounded-2xl border p-4 hover:shadow-lg transition"
      >
        <img
          :src="product.image"
          class="w-full h-48 object-contain mb-4"
        />

        <h3 class="font-bold text-gray-900">
          {{ product.name }}
        </h3>

        <p class="text-blue-600 font-bold mt-2">
          ${{ product.price }} MXN
        </p>

        <span
          class="inline-block mt-3 bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600"
        >
          {{ product.category }}
        </span>
      </div>

    </div>

    <!-- BUTTON -->
    <div class="text-center mt-10">
      <button
        @click="showArmazonesModal = true"
        class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition"
      >
        Ver todos los armazones
      </button>
    </div>

  </div>
</section>

<section id="nosotros" class="py-24 bg-white px-6">
  <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    <!-- Left Image -->
    <div class="relative">
      <img
        src="/src/assets/Proyecto1\15years.png"
        alt="Especialistas oftalmológicos"
        class="w-full h-[500px] object-cover rounded-3xl shadow-xl"
      />

      <!-- Floating stats card -->
      <div class="absolute bottom-6 left-6 bg-white shadow-xl rounded-2xl p-6 w-64">
        <h3 class="text-3xl font-bold text-blue-600">
          +15 años
        </h3>

        <p class="text-gray-600 text-sm mt-2">
          de experiencia cuidando la visión de nuestros pacientes
        </p>
      </div>
    </div>

    <!-- Right Content -->
    <div>

      <p class="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">
        Sobre Nosotros
      </p>

      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
        Expertos en salud visual con tecnología avanzada
      </h2>

      <p class="text-gray-600 text-lg leading-relaxed mb-6">
        En Alianza Oftalmológica brindamos atención integral para el cuidado
        de la visión, combinando experiencia médica, tecnología de última
        generación y atención personalizada para cada paciente.
      </p>

      <p class="text-gray-600 text-lg leading-relaxed mb-8">
        Nuestro equipo está especializado en consultas, cirugías,
        diagnóstico avanzado y venta de armazones de alta calidad.
      </p>

      <!-- Features -->
      <div class="grid md:grid-cols-2 gap-4 mb-8">

        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            ✓
          </div>
          <span class="text-gray-700 font-medium">
            Médicos certificados
          </span>
        </div>

        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            ✓
          </div>
          <span class="text-gray-700 font-medium">
            Tecnología moderna
          </span>
        </div>

        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            ✓
          </div>
          <span class="text-gray-700 font-medium">
            Cirugías especializadas
          </span>
        </div>

        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            ✓
          </div>
          <span class="text-gray-700 font-medium">
            Atención personalizada
          </span>
        </div>

      </div>

      <!-- Button -->
      <a
        @click="showConsultationModal = true"
        class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition"
      >
        Agenda tu consulta
      </a>

    </div>
  </div>
</section>

<section id="contacto" class="py-20 bg-white px-6">
  <div class="max-w-7xl mx-auto">

    <!-- TOP CTA BANNER -->
    <div
      class="relative rounded-2xl overflow-hidden mb-10"
    >
      <!-- Background image -->
      <img
        src="\src\assets\Proyecto1\fondo-agendar.png"
        class="absolute inset-0 w-full h-full object-cover"
        alt="Clínica"
      />

      <!-- Overlay -->
      <div class="absolute inset-0 bg-blue-950/75"></div>

      <!-- Content -->
      <div
        class="relative z-10 px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <!-- Left -->
        <div class="text-white">
          <p class="text-blue-300 text-xs uppercase font-semibold tracking-widest mb-2">
            ¿Listo para cuidar tu visión?
          </p>

          <h2 class="text-3xl font-bold mb-2">
            Agenda tu consulta hoy mismo
          </h2>

          <p class="text-gray-200">
            Estamos aquí para ayudarte a ver mejor y vivir mejor.
          </p>
        </div>

        <!-- Right Button -->
        <a
          @click="showModal = true"
          class="bg-white text-blue-900 px-6 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Agendar cita ahora
        </a>
      </div>
    </div>

    <!-- CONTACT INFO -->
    <div class="grid md:grid-cols-4 gap-6">

      <!-- WhatsApp -->
      <div class="flex items-start gap-4">
        <div class="text-green-500 text-2xl">
          💬
        </div>

        <div>
          <h3 class="font-bold text-gray-900">
            Escríbenos por WhatsApp
          </h3>

          <p class="text-gray-500 text-sm">
            Resolvemos tus dudas y agendamos rápido.
          </p>

          <p class="text-blue-600 text-sm font-semibold mt-2">
            55 1234 5678
          </p>
        </div>
      </div>

      <!-- Visitanos -->
      <div class="flex items-start gap-4">
        <div class="text-blue-500 text-2xl">
          📍
        </div>

        <div>
          <h3 class="font-bold text-gray-900">
            Visítanos
          </h3>

          <p class="text-gray-500 text-sm">
            Av. Insurgentes Sur 1234,
            Benito Juárez, CDMX
          </p>

          <p class="text-blue-600 text-sm font-semibold mt-2">
            Ver en mapa →
          </p>
        </div>
      </div>

      <!-- Horarios -->
      <div class="flex items-start gap-4">
        <div class="text-blue-500 text-2xl">
          🕒
        </div>

        <div>
          <h3 class="font-bold text-gray-900">
            Horarios
          </h3>

          <p class="text-gray-500 text-sm">
            Lunes a Viernes: 9:00 - 18:00
          </p>

          <p class="text-gray-500 text-sm">
            Sábados: 9:00 - 14:00
          </p>
        </div>
      </div>

      <!-- Call -->
      <div class="flex items-start gap-4">
        <div class="text-blue-500 text-2xl">
          📞
        </div>

        <div>
          <h3 class="font-bold text-gray-900">
            Llámanos
          </h3>

          <p class="text-gray-500 text-sm">
            Atención inmediata
          </p>

          <p class="text-blue-600 text-sm font-semibold mt-2">
            55 1234 5678
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
  </div>

<!-- MODAL AGENDAR -->
<div
  v-if="showModal"
  class="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex justify-center items-center p-4"
>
  <div
    class="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden relative max-h-[95vh] overflow-y-auto"
  >

    <!-- cerrar -->
    <button
      @click="showModal = false"
      class="absolute top-4 right-4 text-gray-500 hover:text-black z-20 text-xl"
    >
      ✕
    </button>

    <!-- GRID RESPONSIVE -->
    <div class="grid grid-cols-1 md:grid-cols-2">

      <!-- IZQUIERDA FORM -->
      <div class="p-6 md:p-8 md:border-r">

        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
            📅
          </div>

          <div>
            <h2 class="text-2xl font-bold text-gray-900">
              Agendar cita
            </h2>

            <p class="text-sm text-gray-500">
              Completa el formulario
            </p>
          </div>
        </div>

        <div class="space-y-4">

          <input
            type="text"
            placeholder="Nombre completo"
            class="w-full border rounded-lg px-4 py-3 text-black"
          />

          <input
            type="tel"
            placeholder="Teléfono"
            class="w-full border rounded-lg px-4 py-3 text-black"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            class="w-full border rounded-lg px-4 py-3 text-black"
          />

          <select
            class="w-full border rounded-lg px-4 py-3 text-black"
          >
            <option>Selecciona un servicio</option>
            <option>Consulta general</option>
            <option>LASIK</option>
            <option>Cataratas</option>
            <option>Retina</option>
          </select>

          <!-- responsive -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="date"
              class="w-full border rounded-lg px-4 py-3 text-black"
            />

            <input
              type="time"
              class="w-full border rounded-lg px-4 py-3 text-black"
            />
          </div>

          <textarea
            rows="4"
            placeholder="Mensaje adicional"
            class="w-full border rounded-lg px-4 py-3 text-black"
          ></textarea>

          <button
            class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            Agendar mi cita
          </button>

        </div>
      </div>

      <!-- RIGHT SIDE -->
      <div class="p-6 md:p-8 bg-white">

        <div class="flex flex-col gap-4 h-full">

          <!-- INFO CARD -->
          <div class="bg-blue-50 rounded-2xl p-6">

            <h3 class="text-blue-600 font-bold text-lg mb-5">
              Información importante
            </h3>

            <div class="space-y-5">

              <div>
                <h4 class="font-semibold text-gray-900 text-sm mb-1">
                  Confirmación
                </h4>
                <p class="text-sm text-gray-600 leading-relaxed">
                  Te contactaremos para confirmar tu cita
                </p>
              </div>

              <div>
                <h4 class="font-semibold text-gray-900 text-sm mb-1">
                  Puntualidad
                </h4>
                <p class="text-sm text-gray-600 leading-relaxed">
                  Te recomendamos llegar 10 minutos antes
                </p>
              </div>

              <div>
                <h4 class="font-semibold text-gray-900 text-sm mb-1">
                  Cancelaciones
                </h4>
                <p class="text-sm text-gray-600 leading-relaxed">
                  Si no puedes asistir, avísanos con anticipación
                </p>
              </div>

            </div>
          </div>

          <!-- HORARIOS -->
          <div class="bg-gray-50 rounded-2xl p-6">

            <h3 class="font-bold text-gray-900 mb-4 text-sm">
              Horarios de atención
            </h3>

            <div class="space-y-3 text-sm text-gray-600">

              <div class="flex justify-between">
                <span>Lunes - Viernes</span>
                <span>9:00 am - 6:00 pm</span>
              </div>

              <div class="flex justify-between">
                <span>Sábado</span>
                <span>9:00 am - 2:00 pm</span>
              </div>

              <div class="flex justify-between">
                <span>Domingo</span>
                <span>Cerrado</span>
              </div>

            </div>
          </div>

          <!-- TELÉFONO -->
          <div class="bg-blue-50 rounded-2xl p-6">

            <p class="text-sm text-gray-600 mb-3 leading-relaxed">
              En caso de emergencia, contáctanos directamente
            </p>

            <p class="text-blue-600 text-xl font-bold">
              (33) 1234 5678
            </p>

          </div>

        </div>
      </div>

    </div>
  </div>
</div>
 
<!-- PREMIUM CONSULTATION MODAL -->
<div
  v-if="showConsultationModal"
  class="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
>
  <!-- MODAL -->
  <div
    class="relative w-full max-w-6xl bg-white rounded-[32px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.35)] max-h-[95vh] overflow-y-auto"
  >

    <!-- CLOSE -->
    <button
      @click="showConsultationModal = false"
      class="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-white/90 backdrop-blur border border-gray-200 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 transition"
    >
      ✕
    </button>

    <div class="grid lg:grid-cols-2 min-h-[750px]">

      <!-- LEFT SIDE -->
      <div
        class="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-8 lg:p-14 flex flex-col justify-between overflow-hidden"
      >

        <!-- background circles -->
        <div class="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300/10 rounded-full blur-3xl"></div>

        <!-- TOP -->
        <div class="relative z-10">

          <div
            class="w-20 h-20 rounded-3xl bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center text-4xl text-white mb-8"
          >
            👁️
          </div>

          <p class="text-blue-100 uppercase tracking-[0.3em] text-xs font-semibold mb-5">
            Alianza Oftalmológica
          </p>

          <h2
            class="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
          >
            Agenda tu
            consulta visual
          </h2>

          <p class="text-blue-100 text-lg leading-relaxed max-w-lg">
            Especialistas certificados, tecnología de última generación
            y atención personalizada para cuidar tu visión.
          </p>

        </div>

        <!-- FEATURES -->
        <div class="relative z-10 space-y-4 mt-10">

          <!-- item -->
          <div
            class="bg-white/10 border border-white/10 backdrop-blur rounded-2xl p-5 flex items-start gap-4"
          >
            <div
              class="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-2xl text-white shrink-0"
            >
              🩺
            </div>

            <div>
              <h3 class="font-semibold text-white mb-1">
                Especialistas certificados
              </h3>

              <p class="text-sm text-blue-100 leading-relaxed">
                Atención médica profesional y personalizada.
              </p>
            </div>
          </div>

          <!-- item -->
          <div
            class="bg-white/10 border border-white/10 backdrop-blur rounded-2xl p-5 flex items-start gap-4"
          >
            <div
              class="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-2xl text-white shrink-0"
            >
              ⚡
            </div>

            <div>
              <h3 class="font-semibold text-white mb-1">
                Tecnología avanzada
              </h3>

              <p class="text-sm text-blue-100 leading-relaxed">
                Diagnósticos precisos y tratamientos modernos.
              </p>
            </div>
          </div>

          <!-- item -->
          <div
            class="bg-white/10 border border-white/10 backdrop-blur rounded-2xl p-5 flex items-start gap-4"
          >
            <div
              class="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-2xl text-white shrink-0"
            >
              ⏰
            </div>

            <div>
              <h3 class="font-semibold text-white mb-1">
                Respuesta rápida
              </h3>

              <p class="text-sm text-blue-100 leading-relaxed">
                Confirmamos tu cita vía WhatsApp en minutos.
              </p>
            </div>
          </div>

        </div>

        <!-- BOTTOM -->
        <div
          class="relative z-10 mt-10 bg-white/10 border border-white/10 backdrop-blur rounded-3xl p-6"
        >

          <div class="flex items-center justify-between gap-6">

            <div>
              <p class="text-blue-100 text-sm mb-1">
                Atención inmediata
              </p>

              <h3 class="text-white font-bold text-2xl">
                (33) 1234 5678
              </h3>
            </div>

            <a
              href="https://wa.me/5215512345678"
              target="_blank"
              class="bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold hover:bg-blue-50 transition"
            >
              WhatsApp
            </a>

          </div>

        </div>
      </div>

      <!-- RIGHT SIDE -->
      <div class="bg-[#f8fafc] p-8 lg:p-14 flex flex-col justify-center">

        <!-- HEADER -->
        <div class="mb-10">

          <p
            class="text-blue-600 uppercase tracking-[0.25em] text-xs font-bold mb-3"
          >
            Solicitar consulta
          </p>

          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Completa tu información
          </h2>

          <p class="text-gray-500 leading-relaxed">
            Agenda una valoración con nuestros especialistas y recibe
            atención personalizada para el cuidado de tu visión.
          </p>

        </div>

        <!-- FORM -->
        <div class="space-y-5">

          <!-- row -->
          <div class="grid md:grid-cols-2 gap-5">

            <div>
              <label class="text-sm font-medium text-gray-700 mb-2 block">
                Nombre completo
              </label>

              <input
                type="text"
                placeholder="Tu nombre"
                class="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label class="text-sm font-medium text-gray-700 mb-2 block">
                Teléfono
              </label>

              <input
                type="tel"
                placeholder="(33) 0000 0000"
                class="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

          </div>

          <!-- row -->
          <div class="grid md:grid-cols-2 gap-5">

            <div>
              <label class="text-sm font-medium text-gray-700 mb-2 block">
                Correo electrónico
              </label>

              <input
                type="email"
                placeholder="correo@email.com"
                class="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label class="text-sm font-medium text-gray-700 mb-2 block">
                Servicio
              </label>

              <select
                class="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Selecciona un servicio</option>
                <option>Consulta general</option>
                <option>Cirugía LASIK</option>
                <option>Cataratas</option>
                <option>Retina</option>
                <option>Armazones</option>
              </select>
            </div>

          </div>

          <!-- row -->
          <div class="grid md:grid-cols-2 gap-5">

            <div>
              <label class="text-sm font-medium text-gray-700 mb-2 block">
                Fecha preferida
              </label>

              <input
                type="date"
                class="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label class="text-sm font-medium text-gray-700 mb-2 block">
                Hora preferida
              </label>

              <input
                type="time"
                class="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

          </div>

          <!-- textarea -->
          <div>

            <label class="text-sm font-medium text-gray-700 mb-2 block">
              Mensaje adicional
            </label>

            <textarea
              rows="5"
              placeholder="Describe brevemente tu situación..."
              class="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>

          </div>

          <!-- button -->
          <button
            class="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-semibold text-lg shadow-lg shadow-blue-600/20 transition-all duration-300 hover:scale-[1.01]"
          >
            Agendar mi consulta
          </button>

        </div>

        <!-- BOTTOM INFO -->
        <div
          class="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-500"
        >

          <div class="flex items-center gap-2">
            <span class="text-green-500">●</span>
            Respuesta promedio de 5 a 15 minutos
          </div>

          <div>
            Atención de lunes a sábado
          </div>

        </div>

      </div>

    </div>
  </div>
</div>

<!-- MODAL CIRUGÍAS -->
<!-- MODAL PREMIUM CIRUGÍAS -->
<div
  v-if="showCirugiasModal"
  class="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
>

  <!-- CONTENEDOR -->
  <div
    class="bg-white w-full max-w-7xl h-[95vh] rounded-[32px] overflow-hidden shadow-2xl relative flex flex-col"
  >

    <!-- CERRAR -->
    <button
      @click="showCirugiasModal = false"
      class="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/90 hover:bg-white text-gray-700 text-2xl shadow-lg transition"
    >
      ✕
    </button>

    <!-- SCROLL -->
    <div class="overflow-y-auto flex-1">

      <!-- HERO -->
      <section
        class="relative overflow-hidden bg-gradient-to-r from-[#003b99] via-[#0052cc] to-[#1a73ff]"
      >

        <div class="grid lg:grid-cols-2 min-h-[480px]">

          <!-- LEFT -->
          <div class="p-10 lg:p-16 flex flex-col justify-center text-white z-10">

            <p class="uppercase tracking-[5px] text-blue-200 text-sm mb-5">
              Especialidades quirúrgicas
            </p>

            <h2 class="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Cirugías Oftalmológicas
              Avanzadas
            </h2>

            <p class="text-blue-100 text-lg leading-relaxed max-w-xl mb-10">
              Contamos con especialistas certificados y tecnología de última
              generación para procedimientos visuales seguros, precisos y personalizados.
            </p>

            <!-- BENEFICIOS -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">

              <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/10">
                <div class="text-3xl mb-3">🛡️</div>

                <h3 class="font-bold text-lg mb-1">
                  Máxima seguridad
                </h3>

                <p class="text-blue-100 text-sm">
                  Protocolos médicos modernos
                </p>
              </div>

              <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/10">
                <div class="text-3xl mb-3">👨‍⚕️</div>

                <h3 class="font-bold text-lg mb-1">
                  Especialistas
                </h3>

                <p class="text-blue-100 text-sm">
                  Oftalmólogos certificados
                </p>
              </div>

              <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/10">
                <div class="text-3xl mb-3">⚡</div>

                <h3 class="font-bold text-lg mb-1">
                  Recuperación rápida
                </h3>

                <p class="text-blue-100 text-sm">
                  Técnicas mínimamente invasivas
                </p>
              </div>

            </div>
          </div>

          <!-- RIGHT IMAGE -->
          <div class="relative hidden lg:block">

            <img
              src=""
              class="absolute inset-0 w-full h-full object-cover"
            />

            <div class="absolute inset-0 bg-gradient-to-l from-transparent to-[#0052cc]/80"></div>

          </div>

        </div>
      </section>

      <!-- BODY -->
      <section class="bg-[#f5f7fb] p-8 lg:p-12">

        <!-- TITLE -->
        <div class="text-center mb-14">

          <h3 class="text-4xl font-bold text-gray-900 mb-4">
            Nuestras principales cirugías
          </h3>

          <div class="w-24 h-1 bg-blue-600 rounded-full mx-auto"></div>

        </div>

<!-- GRID -->
<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

  <!-- CARD LASIK -->
  <div
    class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 group"
  >

    <!-- IMAGE -->
    <div class="relative overflow-hidden">

      <img
        src="\src\assets\Proyecto1\Lasik.png"
        class="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
      />

      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      <div class="absolute top-4 left-4">
        <span class="bg-blue-600 text-white text-xs px-4 py-2 rounded-full font-semibold">
          Popular
        </span>
      </div>

    </div>

    <!-- CONTENT -->
    <div class="p-7">

      <h3 class="text-2xl font-bold text-gray-900 mb-4">
        Cirugía LASIK
      </h3>

      <p class="text-gray-600 leading-relaxed mb-6">
        Procedimiento láser avanzado para corregir miopía,
        hipermetropía y astigmatismo.
      </p>

      <div class="space-y-3 text-sm text-gray-700">

        <div class="flex items-center gap-3">
          <span class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            ✓
          </span>
          Resultados rápidos
        </div>

        <div class="flex items-center gap-3">
          <span class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            ✓
          </span>
          Procedimiento ambulatorio
        </div>

        <div class="flex items-center gap-3">
          <span class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            ✓
          </span>
          Recuperación en 24-48 horas
        </div>

      </div>

    </div>

  </div>







  <!-- CARD CATARATAS -->
  <div
    class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 group"
  >

    <!-- IMAGE -->
    <div class="relative overflow-hidden">

      <img
        src="\src\assets\Proyecto1\Catarata.png"
        class="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
      />

      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      <div class="absolute top-4 left-4">
        <span class="bg-purple-600 text-white text-xs px-4 py-2 rounded-full font-semibold">
          Premium
        </span>
      </div>

    </div>

    <!-- CONTENT -->
    <div class="p-7">

      <h3 class="text-2xl font-bold text-gray-900 mb-4">
        Cirugía de Cataratas
      </h3>

      <p class="text-gray-600 leading-relaxed mb-6">
        Extracción de cataratas con implante de lente intraocular premium.
      </p>

      <div class="space-y-3 text-sm text-gray-700">

        <div class="flex items-center gap-3">
          <span class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            ✓
          </span>
          Mejora significativa de visión
        </div>

        <div class="flex items-center gap-3">
          <span class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            ✓
          </span>
          Lentes intraoculares premium
        </div>

        <div class="flex items-center gap-3">
          <span class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            ✓
          </span>
          Procedimiento seguro
        </div>

      </div>

    </div>

  </div>







  <!-- CARD RETINA -->
  <div
    class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 group"
  >

    <!-- IMAGE -->
    <div class="relative overflow-hidden">

      <img
        src="\src\assets\Proyecto1\Retina-v.png"
        class="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
      />

      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      <div class="absolute top-4 left-4">
        <span class="bg-cyan-600 text-white text-xs px-4 py-2 rounded-full font-semibold">
          Avanzado
        </span>
      </div>

    </div>

    <!-- CONTENT -->
    <div class="p-7">

      <h3 class="text-2xl font-bold text-gray-900 mb-4">
        Retina y Vítreo
      </h3>

      <p class="text-gray-600 leading-relaxed mb-6">
        Tratamientos avanzados para enfermedades de retina y vítreo.
      </p>

      <div class="space-y-3 text-sm text-gray-700">

        <div class="flex items-center gap-3">
          <span class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            ✓
          </span>
          Tecnología avanzada
        </div>

        <div class="flex items-center gap-3">
          <span class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            ✓
          </span>
          Diagnóstico preciso
        </div>

        <div class="flex items-center gap-3">
          <span class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            ✓
          </span>
          Atención personalizada
        </div>

      </div>

    </div>

  </div>







  <!-- RESTO DE CIRUGIAS -->
  <div
    v-for="cirugia in [
      'Cirugía Refractiva',
      'Implante de Lentes Intraoculares',
      'Cross Linking',
      'Cirugía de Glaucoma',
      'Trasplante de Córnea',
      'Oculoplástica',
      'Cirugía de Estrabismo',
      'Pterigión',
      'Queratocono',
      'Vitrectomía',
      'Blefaroplastia',
      'Canaloplastía',
      'PRK',
      'SMILE',
      'YAG Láser',
      'Fotocoagulación Láser',
      'Trabeculectomía',
      'Dacriocistorrinostomía'
    ]"
    :key="cirugia"
    class="bg-white rounded-3xl p-7 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 group"
  >

    <!-- ICON -->
    <div
      class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition"
    >
      ✨
    </div>

    <!-- TITLE -->
    <h3 class="text-2xl font-bold text-gray-900 mb-4">
      {{ cirugia }}
    </h3>

    <!-- TEXT -->
    <p class="text-gray-600 leading-relaxed">
      Procedimiento oftalmológico avanzado realizado por especialistas
      certificados con tecnología moderna.
    </p>

  </div>

</div>

        <!-- CTA -->
        <div
          class="mt-16 rounded-3xl overflow-hidden bg-gradient-to-r from-blue-100 to-white border"
        >

          <div
            class="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 lg:p-10"
          >

            <div class="flex items-center gap-5">

              <div
                class="w-20 h-20 rounded-3xl bg-blue-600 text-white flex items-center justify-center text-4xl"
              >
                📅
              </div>

              <div>

                <h3 class="text-3xl font-bold text-gray-900 mb-2">
                  Agenda tu valoración especializada
                </h3>

                <p class="text-gray-600 text-lg">
                  Evaluaremos tu caso para recomendarte el mejor tratamiento visual.
                </p>

              </div>
            </div>

            <button
              @click="showCirugiasModal = false;
              showModal = true"
              class="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition shadow-lg"
            >
              Agendar cita →
            </button>

          </div>
        </div>

      </section>

    </div>
  </div>
</div>

<!-- MODAL PREMIUM ARMAZONES -->
<!-- MODAL TIENDA -->
<div
  v-if="showArmazonesModal"
  class="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
>

  <!-- CONTAINER -->
  <div
    class="bg-[#f5f7fb] w-full max-w-7xl h-[95vh] rounded-[32px] overflow-hidden shadow-2xl relative flex flex-col"
  >

    <!-- CLOSE -->
    <button
      @click="showArmazonesModal = false"
      class="absolute top-5 right-5 z-50 w-12 h-12 rounded-full bg-white shadow-lg text-gray-700 hover:bg-gray-100 transition"
    >
      ✕
    </button>

    <!-- TOP BAR -->
    <div class="bg-white border-b px-8 py-5 flex items-center justify-between">

      <div>
        <h2 class="text-3xl font-bold text-gray-900">
          Catálogo de Armazones
        </h2>

        <p class="text-gray-500 mt-1">
          Más de 120 modelos disponibles
        </p>
      </div>

      <!-- SEARCH -->
      <div class="hidden lg:flex items-center gap-4">

        <input
          type="text"
          placeholder="Buscar armazón..."
          class="w-80 px-5 py-3 rounded-2xl border bg-gray-50 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          class="px-5 py-3 rounded-2xl border bg-white text-gray-700 outline-none"
        >
          <option>Más relevantes</option>
          <option>Menor precio</option>
          <option>Mayor precio</option>
          <option>Más vendidos</option>
        </select>

      </div>

    </div>

    <!-- BODY -->
    <div class="flex-1 overflow-hidden">

      <div class="grid lg:grid-cols-[280px_1fr] h-full">

        <!-- SIDEBAR -->
        <div class="bg-white border-r overflow-y-auto p-6">

          <h3 class="text-xl font-bold text-gray-900 mb-8">
            Filtros
          </h3>

          <!-- MOBILE SEARCH -->
          <div class="lg:hidden mb-6">

            <input
              type="text"
              placeholder="Buscar..."
              class="w-full px-4 py-3 rounded-xl border bg-gray-50"
            />

          </div>

          <!-- MARCAS -->
          <div class="mb-8">

            <h4 class="font-bold text-gray-900 mb-4">
              Marca
            </h4>

            <div class="space-y-3 text-gray-600">

              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox">
                Ray-Ban
              </label>

              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox">
                Oakley
              </label>

              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox">
                Vogue
              </label>

              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox">
                Guess
              </label>

            </div>
          </div>

          <!-- GÉNERO -->
          <div class="mb-8">

            <h4 class="font-bold text-gray-900 mb-4">
              Género
            </h4>

            <div class="space-y-3 text-gray-600">

              <label class="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="gender">
                Hombre
              </label>

              <label class="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="gender">
                Mujer
              </label>

              <label class="flex items-center gap-3 cursor-pointer">
                <input type="radio" name="gender">
                Unisex
              </label>

            </div>
          </div>

          <!-- PRECIO -->
          <div>

            <h4 class="font-bold text-gray-900 mb-4">
              Precio
            </h4>

            <input
              type="range"
              class="w-full"
            />

            <div class="flex justify-between text-sm text-gray-500 mt-3">
              <span>$1,000</span>
              <span>$10,000</span>
            </div>

          </div>

        </div>

        <!-- PRODUCTS -->
        <div class="overflow-y-auto p-8">

          <!-- GRID -->
          <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">

            <!-- PRODUCT -->
            <div
              class="bg-white rounded-3xl border overflow-hidden hover:shadow-2xl transition duration-300 group"
            >

              <!-- IMG -->
              <div class="bg-[#f8fafc] p-8 relative">

                <img
                  src="/src/assets/Proyecto1/ray.png"
                  class="w-full h-56 object-contain group-hover:scale-105 transition duration-500"
                />

                <!-- BADGE -->
                <div
                  class="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
                >
                  Más vendido
                </div>

              </div>

              <!-- INFO -->
              <div class="p-6">

                <p class="text-sm text-gray-500 mb-2">
                  Ray-Ban
                </p>

                <h3 class="text-2xl font-bold text-gray-900 mb-2">
                  RX5228
                </h3>

                <p class="text-gray-500 text-sm mb-5">
                  Elegante, moderno y ligero.
                </p>

                <div class="mb-5">

                  <p class="text-3xl font-bold text-gray-900">
                    $2,800
                  </p>

                  <p class="text-green-600 text-sm">
                    Envío gratis
                  </p>

                </div>

                <div class="flex gap-3">

                  <button
                    class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
                  >
                    Ver producto
                  </button>

                  <button
                    class="w-12 h-12 border rounded-xl hover:bg-gray-100 transition"
                  >
                    ♡
                  </button>

                </div>

              </div>
            </div>

            <!-- PRODUCT -->
            <div
              class="bg-white rounded-3xl border overflow-hidden hover:shadow-2xl transition duration-300 group"
            >

              <div class="bg-[#f8fafc] p-8">

                <img
                  src="/src/assets/Proyecto1/oak.png"
                  class="w-full h-56 object-contain group-hover:scale-105 transition duration-500"
                />

              </div>

              <div class="p-6">

                <p class="text-sm text-gray-500 mb-2">
                  Oakley
                </p>

                <h3 class="text-2xl font-bold text-gray-900 mb-2">
                  OX8137
                </h3>

                <p class="text-gray-500 text-sm mb-5">
                  Estilo deportivo premium.
                </p>

                <div class="mb-5">

                  <p class="text-3xl font-bold text-gray-900">
                    $3,450
                  </p>

                  <p class="text-green-600 text-sm">
                    Envío gratis
                  </p>

                </div>

                <div class="flex gap-3">

                  <button
                    class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
                  >
                    Ver producto
                  </button>

                  <button
                    class="w-12 h-12 border rounded-xl hover:bg-gray-100 transition"
                  >
                    ♡
                  </button>

                </div>

              </div>
            </div>

            <!-- PRODUCT -->
            <div
              class="bg-white rounded-3xl border overflow-hidden hover:shadow-2xl transition duration-300 group"
            >

              <div class="bg-[#f8fafc] p-8">

                <img
                  src="/src/assets/Proyecto1/vogue.png"
                  class="w-full h-56 object-contain group-hover:scale-105 transition duration-500"
                />

              </div>

              <div class="p-6">

                <p class="text-sm text-gray-500 mb-2">
                  Vogue
                </p>

                <h3 class="text-2xl font-bold text-gray-900 mb-2">
                  VO5230
                </h3>

                <p class="text-gray-500 text-sm mb-5">
                  Diseño elegante femenino.
                </p>

                <div class="mb-5">

                  <p class="text-3xl font-bold text-gray-900">
                    $2,150
                  </p>

                  <p class="text-green-600 text-sm">
                    Envío gratis
                  </p>

                </div>

                <div class="flex gap-3">

                  <button
                    class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
                  >
                    Ver producto
                  </button>

                  <button
                    class="w-12 h-12 border rounded-xl hover:bg-gray-100 transition"
                  >
                    ♡
                  </button>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  </div>
</div>
<!-- FOOTER -->
<footer class="bg-[#0B1120] text-white pt-20 pb-10 px-6">
  <div class="max-w-7xl mx-auto">

    <!-- TOP GRID -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

      <!-- BRAND -->
      <div>
        <div class="text-2xl font-extrabold tracking-wide mb-4">
          <span class="text-blue-500">A</span>LIANZA
          <span class="text-blue-500">.</span>
        </div>

        <p class="text-gray-400 text-sm leading-relaxed mb-6">
          Especialistas en salud visual, cirugías oftalmológicas
          y armazones premium para mejorar tu calidad de vida.
        </p>

        <!-- social -->
        <div class="flex gap-3">
          <a
            href="#"
            class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition"
          >
            f
          </a>

          <a
            href="#"
            class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition"
          >
            ig
          </a>

          <a
            href="https://wa.me/5213312345678"
            target="_blank"
            class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition"
          >
            💬
          </a>
        </div>
      </div>

      <!-- LINKS -->
      <div>
        <h3 class="font-bold text-lg mb-5">
          Navegación
        </h3>

        <ul class="space-y-3 text-gray-400 text-sm">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#cirugias">Cirugías</a></li>
          <li><a href="#armazones">Armazones</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
        </ul>
      </div>

      <!-- SERVICIOS -->
      <div>
        <h3 class="font-bold text-lg mb-5">
          Servicios
        </h3>

        <ul class="space-y-3 text-gray-400 text-sm">
          <li>Consulta general</li>
          <li>Cirugía LASIK</li>
          <li>Tratamiento de cataratas</li>
          <li>Retina</li>
          <li>Venta de armazones</li>
        </ul>
      </div>

      <!-- CONTACT -->
      <div>
        <h3 class="font-bold text-lg mb-5">
          Contacto
        </h3>

        <div class="space-y-4 text-gray-400 text-sm">

          <p>
            📍 Guadalajara, Jalisco, México
          </p>

          <p>
            📞 (33) 1234 5678
          </p>

          <p>
            ✉ contacto@alianzaoftalmologica.com
          </p>

          <p>
            Lunes - Viernes: 9AM - 6PM
          </p>
        </div>
      </div>

    </div>

    <!-- BOTTOM -->
    <div class="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

      <p class="text-gray-500 text-sm">
        © 2026 Alianza Oftalmológica. Todos los derechos reservados.
      </p>

      <p class="text-gray-500 text-sm">
        Desarrollado por Braulio
      </p>

    </div>

  </div>
</footer>
  </div>
</template>

<script>
import { Moon, Sun } from 'lucide-vue-next'
export default {
  name: "Ofta",

  components: {
    Moon,
    Sun
  },

  data() {
    return {
      // Theme
      darkMode: true,

      // Modal agendar cita
      showModal: false,

      showConsultationModal: false,

      showCirugiasModal: false,

      showArmazonesModal: false,

      // Mobile navbar
      mobileMenu: false,

      // Search
      searchQuery: "",

      // Filter
      selectedCategory: "Todos",

      // Products
      products: [
        {
          id: 1,
          name: "Ray-Ban RX5228",
          price: 2800,
          category: "Unisex",
          image: "/src/assets/Proyecto1/ray.png"
        },
        {
          id: 2,
          name: "Oakley OX8137",
          price: 3450,
          category: "Hombre",
          image: "/src/assets/Proyecto1/oak.png"
        },
        {
          id: 3,
          name: "Vogue VO5230",
          price: 2150,
          category: "Mujer",
          image: "/src/assets/Proyecto1/vogue.png"
        },
        {
          id: 4,
          name: "Guess GU2644",
          price: 2150,
          category: "Marca",
          image: "/src/assets/Proyecto1/guess.png"
        }
      ]
    }
  },

  computed: {
    filteredProducts() {
      return this.products.filter(product => {

        const matchesCategory =
          this.selectedCategory === "Todos" ||
          product.category === this.selectedCategory

        const matchesSearch =
          product.name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())

        return matchesCategory && matchesSearch
      })
    }
  },

  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode
    }
  }
}
</script>

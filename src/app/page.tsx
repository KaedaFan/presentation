// app/page.tsx
import Link from 'next/link';
import { 
  Building2, 
  Users, 
  Award, 
  Clock, 
  Shield, 
  Hammer, 
  ArrowRight,
  ChevronRight,
  Star
} from 'lucide-react';

const stats = [
  { icon: Building2, value: '150+', label: 'Завершенных проектов' },
  { icon: Users, value: '500+', label: 'Сотрудников' },
  { icon: Award, value: '15 лет', label: 'На рынке' },
  { icon: Clock, value: '24/7', label: 'Поддержка' },
];

const services = [
  {
    icon: Building2,
    title: 'Генеральный подряд',
    description: 'Полный цикл строительных работ с гарантией качества и соблюдением сроков.',
    features: ['Управление проектом', 'Контроль качества', 'Соблюдение бюджета'],
  },
  {
    icon: Hammer,
    title: 'Проектирование',
    description: 'Современные архитектурные и инженерные решения для объектов любой сложности.',
    features: ['BIM-моделирование', '3D-визуализация', 'Технический надзор'],
  },
  {
    icon: Shield,
    title: 'Реконструкция',
    description: 'Профессиональная реконструкция и реновация существующих зданий и сооружений.',
    features: ['Усиление конструкций', 'Модернизация систем', 'Реставрация фасадов'],
  },
];

const projects = [
  {
    title: 'ЖК "Солнечный"',
    category: 'Жилой комплекс',
    area: '45 000 м²',
    year: '2024',
    image: '/api/placeholder/600/400',
  },
  {
    title: 'БЦ "Горизонт"',
    category: 'Коммерческая недвижимость',
    area: '32 000 м²',
    year: '2023',
    image: '/api/placeholder/600/400',
  },
  {
    title: 'ТРЦ "Мегаполис"',
    category: 'Торговая недвижимость',
    area: '78 000 м²',
    year: '2024',
    image: '/api/placeholder/600/400',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20 lg:pt-24">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-8">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-orange-400">Строим будущее с 2010 года</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Создаем пространство
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                для жизни и бизнеса
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Ведущая строительная компания с полным циклом услуг: от проектирования до сдачи объекта. 
              15 лет опыта, 150+ реализованных проектов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/25 group"
              >
                Обсудить проект
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-gray-500 hover:text-white transition-all duration-300 hover:bg-white/5"
              >
                Наши проекты
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-10 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow"
            >
              <stat.icon className="w-8 h-8 text-orange-500 mb-3" />
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Предоставляем полный спектр строительных услуг с использованием современных технологий и материалов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                  <service.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Реализованные проекты
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Каждый проект — это сочетание современных технологий, качества и надежности
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden lg:inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
            >
              Все проекты
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link
                key={index}
                href="#"
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-medium text-gray-900">
                      {project.year}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-orange-600 font-medium mb-2">{project.category}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{project.area}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-amber-600 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Готовы начать проект?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации. Рассчитаем стоимость и сроки вашего проекта в течение 24 часов
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            Получить консультацию
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
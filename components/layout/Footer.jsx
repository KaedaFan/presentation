import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const footerNavigation = {
  company: {
    title: 'Компания',
    links: [
      { name: 'О нас', href: '/about' },
      { name: 'История', href: '/about/history' },
      { name: 'Команда', href: '/about/team' },
      { name: 'Карьера', href: '/careers' },
      { name: 'Новости', href: '/news' },
    ],
  },
  services: {
    title: 'Услуги',
    links: [
      { name: 'Генеральный подряд', href: '/services/general-contract' },
      { name: 'Проектирование', href: '/services/design' },
      { name: 'Реконструкция', href: '/services/reconstruction' },
      { name: 'Инженерные системы', href: '/services/engineering' },
      { name: 'Отделочные работы', href: '/services/finishing' },
    ],
  },
  projects: {
    title: 'Проекты',
    links: [
      { name: 'Жилые комплексы', href: '/projects/residential' },
      { name: 'Коммерческая недвижимость', href: '/projects/commercial' },
      { name: 'Инфраструктура', href: '/projects/infrastructure' },
      { name: 'Промышленное строительство', href: '/projects/industrial' },
    ],
  },
  legal: {
    title: 'Правовая информация',
    links: [
      { name: 'Политика конфиденциальности', href: '/privacy' },
      { name: 'Условия использования', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">С</span>
              </div>
              <div>
                <p className="text-lg font-bold text-white leading-tight">СтройПрогресс</p>
                <p className="text-xs text-gray-400 leading-tight">Строительная компания</p>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-sm">
              Ведущая строительная компания с 15-летним опытом. Создаем надежные и современные объекты для жизни и бизнеса.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+73911234567"
                className="flex items-center gap-3 text-sm hover:text-orange-400 transition-colors group"
              >
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-orange-500" />
                </div>
                <span>+7 (391) 123-45-67</span>
              </a>
              <a
                href="mailto:info@stroyprodemo.ru"
                className="flex items-center gap-3 text-sm hover:text-orange-400 transition-colors group"
              >
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-orange-500" />
                </div>
                <span>info@stroyprodemo.ru</span>
              </a>
              <div className="flex items-start gap-3 text-sm">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-orange-500" />
                </div>
                <span>г. Москва, ул. Строителей, 15, БЦ "Прогресс", офис 405</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.values(footerNavigation).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-orange-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} СтройПроДемо. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
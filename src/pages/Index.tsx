import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      icon: "Zap",
      title: "Промптинженеринг",
      description: "Создание эффективных промптов для ИИ-систем и автоматизации",
      price: "от 5000 ₽"
    },
    {
      icon: "Palette",
      title: "Дизайн логотипов",
      description: "Уникальные логотипы для вашего бренда",
      price: "от 15000 ₽"
    },
    {
      icon: "Image",
      title: "Баннеры",
      description: "Рекламные баннеры для соцсетей и веб-сайтов",
      price: "от 3000 ₽"
    },
    {
      icon: "Brush",
      title: "Иллюстрации",
      description: "Авторские иллюстрации и графика",
      price: "от 8000 ₽"
    }
  ];

  const portfolio = [
    {
      title: "AI Промпт для E-commerce",
      category: "Промптинженеринг",
      image: "/img/e58ba159-6183-4130-bd74-d5e30f145a72.jpg"
    },
    {
      title: "Логотип TechStart",
      category: "Логотип",
      image: "/img/e3488922-3d78-4a51-94d3-bc80e792b5a1.jpg"
    },
    {
      title: "Рекламный баннер",
      category: "Баннер",
      image: "/img/511ac964-44a6-45bd-9df4-8c1122a2be60.jpg"
    },
    {
      title: "Веб-дизайн интернет-магазина",
      category: "Веб-дизайн",
      image: "/img/c153b0bc-2571-4b1e-9ff6-b1e1c041072f.jpg"
    },
    {
      title: "Фирменный стиль",
      category: "Брендинг",
      image: "/img/73209857-d7d0-41b0-8ea1-ceea54845abb.jpg"
    },
    {
      title: "Авторская иллюстрация",
      category: "Иллюстрация",
      image: "/img/7a40dfd5-d627-4618-975d-c43f6da101ac.jpg"
    }
  ];

  const galleryWorks = [
    {
      title: "Веб-дизайн корпоративного сайта",
      category: "Веб-дизайн",
      image: "/img/c153b0bc-2571-4b1e-9ff6-b1e1c041072f.jpg",
      description: "Современный дизайн корпоративного сайта с акцентом на пользовательский опыт"
    },
    {
      title: "Коллекция логотипов",
      category: "Логотипы",
      image: "/img/e3488922-3d78-4a51-94d3-bc80e792b5a1.jpg",
      description: "Минималистичные логотипы для различных сфер бизнеса"
    },
    {
      title: "ИИ-промпты для бизнеса",
      category: "Промптинженеринг",
      image: "/img/e58ba159-6183-4130-bd74-d5e30f145a72.jpg",
      description: "Настройка ChatGPT и других ИИ-инструментов для автоматизации бизнес-процессов"
    },
    {
      title: "Баннеры для соцсетей",
      category: "SMM",
      image: "/img/511ac964-44a6-45bd-9df4-8c1122a2be60.jpg",
      description: "Креативные баннеры для продвижения в социальных сетях"
    },
    {
      title: "Фирменный стиль стартапа",
      category: "Брендинг",
      image: "/img/73209857-d7d0-41b0-8ea1-ceea54845abb.jpg",
      description: "Полный фирменный стиль для технологического стартапа"
    },
    {
      title: "Авторские иллюстрации",
      category: "Иллюстрация",
      image: "/img/7a40dfd5-d627-4618-975d-c43f6da101ac.jpg",
      description: "Уникальные иллюстрации для веб-проектов и печатной продукции"
    }
  ];

  const reviews = [
    {
      name: "Анна Романова",
      role: "Клиент",
      text: "Марина создала отличные промпты для нашего ИИ-ассистента. Качество ответов улучшилось в разы!",
      rating: 5
    },
    {
      name: "Мария Никитина",
      role: "Заказчик",
      text: "Профессиональный подход к созданию контента. Тексты получились живыми и продающими!",
      rating: 5
    },
    {
      name: "Елена Васильева",
      role: "Директор агентства",
      text: "Профессиональный подход к созданию фирменного стиля. Клиенты в восторге от нового логотипа!",
      rating: 5
    },
    {
      name: "Дмитрий Козлов",
      role: "IT-предприниматель",
      text: "Быстро и качественно настроила промпты для ChatGPT. Теперь наша служба поддержки работает эффективнее.",
      rating: 5
    },
    {
      name: "Ольга Смирнова",
      role: "Дизайнер",
      text: "Марина помогла с иллюстрациями для нашего проекта. Творческий подход и внимание к деталям!",
      rating: 5
    },
    {
      name: "Максим Белов",
      role: "Владелец интернет-магазина",
      text: "Отличные баннеры для рекламы! Продажи выросли, а стоимость клика снизилась.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold font-heading text-primary">Portfolio</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О себе</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="py-20 px-4 animate-fade-in min-h-screen flex items-center relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/38b8474d-e465-4d3a-b595-15ff2699d691.jpg')`
        }}
      >
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 animate-slide-up drop-shadow-lg">
            Фрилансер
            <span className="block text-blue-300">Дизайнер</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 font-body max-w-2xl mx-auto animate-slide-up drop-shadow" style={{animationDelay: '0.2s'}}>
            Промптинженеринг • Логотипы • Баннеры • Иллюстрации • Дизайн
          </p>
          <Button size="lg" className="text-lg px-8 py-6 animate-scale-in bg-blue-600 hover:bg-blue-700 border-0" style={{animationDelay: '0.4s'}}>
            Смотреть работы
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold font-heading mb-6">О себе</h3>
              <p className="text-lg text-muted-foreground mb-6 font-body leading-relaxed">
                Привет! Меня зовут Марина Лактионова, я фрилансер с опытом в области промптинженеринга, дизайна, написании текстов. 
                Специализируюсь на создании уникальных визуальных решений и работе с ИИ-системами.
              </p>
              <p className="text-lg text-muted-foreground mb-8 font-body leading-relaxed">
                Мой подход — сочетание креативности и технических знаний для достижения максимального результата для каждого клиента.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline">AI/ML</Badge>
                <Badge variant="outline">Графический дизайн</Badge>
                <Badge variant="outline">Брендинг</Badge>
                <Badge variant="outline">Промптинженеринг</Badge>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-primary/10 rounded-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/e3537739-252d-4395-b80a-9bd963fff364.jpg" 
                  alt="Марина Лактионова - Фрилансер Дизайнер" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold font-heading text-center mb-16">Портфолио</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                  <h4 className="text-xl font-semibold font-heading">{item.title}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-slate-50/50 via-gray-50/30 to-zinc-50/40">
        <div className="container mx-auto max-w-7xl">
          <h3 className="text-4xl font-bold font-heading text-center mb-16">Галерея работ</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryWorks.map((work, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/70 backdrop-blur-sm">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-body leading-tight">{work.description}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary border-primary/20">{work.category}</Badge>
                  <h4 className="text-xl font-semibold font-heading text-gray-800 group-hover:text-primary transition-colors duration-300">{work.title}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold font-heading text-center mb-16">Услуги</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold font-heading mb-3">{service.title}</h4>
                  <p className="text-muted-foreground font-body mb-4">{service.description}</p>
                  <p className="text-lg font-semibold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold font-heading text-center mb-16">Отзывы</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-base mb-4 font-body italic">"{review.text}"</p>
                  <div>
                    <p className="font-semibold font-heading text-sm">{review.name}</p>
                    <p className="text-muted-foreground font-body text-xs">{review.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-bold font-heading mb-8">Контакты</h3>
          <p className="text-xl text-muted-foreground mb-12 font-body">
            Готов обсудить ваш проект и воплотить ваши идеи в жизнь
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://t.me/aniram_13mir" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                @aniram_13mir
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://t.me/Marusja_nik67" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                @Marusja_nik67
              </a>
            </Button>
          </div>
          <div className="mt-12 flex justify-center items-center space-x-8">
            <div className="flex flex-col items-center">
              <a href="https://t.me/aniram_13mir" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors mb-2">
                <Icon name="MessageCircle" size={24} />
              </a>
              <span className="text-sm text-muted-foreground">@aniram_13mir</span>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://t.me/Marusja_nik67" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors mb-2">
                <Icon name="MessageCircle" size={24} />
              </a>
              <span className="text-sm text-muted-foreground">@Marusja_nik67</span>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://vk.com/feed" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors mb-2">
                <Icon name="MessageCircle" size={24} />
              </a>
              <span className="text-sm text-muted-foreground">ВК</span>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://ok.ru/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors mb-2">
                <Icon name="Users" size={24} />
              </a>
              <span className="text-sm text-muted-foreground">ОК</span>
            </div>
            <div className="flex flex-col items-center">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors mb-2">
                <Icon name="AtSign" size={24} />
              </a>
              <span className="text-sm text-muted-foreground">Max</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground font-body">
            © 2024 Фрилансер Дизайнер. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
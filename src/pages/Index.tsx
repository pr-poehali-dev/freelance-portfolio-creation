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
      image: "/img/7812978e-fe20-426e-aa93-989cd6855bbb.jpg"
    },
    {
      title: "Логотип TechStart",
      category: "Логотип",
      image: "/img/0f046d48-e5bb-45fc-873f-4281e78e9643.jpg"
    },
    {
      title: "Рекламный баннер",
      category: "Баннер",
      image: "/img/52d0cdb1-d33f-40a4-8312-790040c3bf1f.jpg"
    },
    {
      title: "Веб-дизайн интернет-магазина",
      category: "Веб-дизайн",
      image: "/img/48bea2f2-19d0-4d31-92d1-f05ca059e0c5.jpg"
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

  const reviews = [
    {
      name: "Анна Сергеева",
      role: "CEO стартапа",
      text: "Марина создала отличные промпты для нашего ИИ-ассистента. Качество ответов улучшилось в разы!",
      rating: 5
    },
    {
      name: "Михаил Петров",
      role: "Маркетолог",
      text: "Потрясающие баннеры! Конверсия выросла на 40% после обновления креативов.",
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
      text: "Быстро и качественно настроил промпты для ChatGPT. Теперь наша служба поддержки работает эффективнее.",
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
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О себе</a>
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-muted/30">
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

      {/* About Section */}
      <section id="about" className="py-20 px-4">
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
                  alt="Юра - Фрилансер Дизайнер" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
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
      <section id="reviews" className="py-20 px-4">
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
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="Mail" size={20} className="mr-2" />
              Написать письмо
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Telegram
            </Button>
          </div>
          <div className="mt-12 flex justify-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
            <span className="text-sm text-muted-foreground">ВК</span>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Users" size={24} />
            </a>
            <span className="text-sm text-muted-foreground">ОК</span>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="AtSign" size={24} />
            </a>
            <span className="text-sm text-muted-foreground">Max</span>
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
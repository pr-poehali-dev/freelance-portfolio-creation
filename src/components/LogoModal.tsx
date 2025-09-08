import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const logos = [
  // Первая серия логотипов
  {
    id: 1,
    title: "Creative Studio",
    category: "Креатив",
    image: "/img/0f046d48-e5bb-45fc-873f-4281e78e9643.jpg",
    description: "Современный логотип для креативной студии",
    colors: ["Фиолетовый", "Розовый"]
  },
  {
    id: 2,
    title: "Fashion Boutique",
    category: "Мода",
    image: "/img/22341331-6929-401e-a269-74e55a7f915e.jpg",
    description: "Элегантный логотип для модного бутика",
    colors: ["Золотой", "Черный"]
  },
  {
    id: 3,
    title: "Digital Agency",
    category: "IT",
    image: "/img/38b8474d-e465-4d3a-b595-15ff2699d691.jpg",
    description: "Технологичный логотип для диджитал агентства",
    colors: ["Синий", "Белый"]
  },
  {
    id: 4,
    title: "Organic Market",
    category: "Еда",
    image: "/img/48bea2f2-19d0-4d31-92d1-f05ca059e0c5.jpg",
    description: "Натуральный логотип для органического рынка",
    colors: ["Зеленый", "Коричневый"]
  },
  
  // Вторая серия логотипов
  {
    id: 5,
    title: "TechStartup Logo",
    category: "Технологии",
    image: "/img/28613a00-cfe4-453a-a387-3ef5f9ce8357.jpg",
    description: "Минималистичный логотип для технологического стартапа",
    colors: ["Синий", "Черный"]
  },
  {
    id: 6,
    title: "Luxury Brand",
    category: "Мода",
    image: "/img/bd21e2fb-1cc4-4f76-86dc-f7961efd1704.jpg",
    description: "Элегантный логотип для люксового бренда",
    colors: ["Золотой", "Черный"]
  },
  {
    id: 7,
    title: "Organic Food Co",
    category: "Еда",
    image: "/img/a160b94a-9c2f-4cdc-b0fa-86d449ef4f91.jpg",
    description: "Эко-дружелюбный логотип для органических продуктов",
    colors: ["Зеленый", "Натуральный"]
  },
  {
    id: 8,
    title: "Power Gym",
    category: "Фитнес",
    image: "/img/3e823b76-f01b-4102-919f-766678dd412a.jpg",
    description: "Энергичный логотип для спортивного зала",
    colors: ["Красный", "Черный"]
  },
  {
    id: 9,
    title: "Kids Learning App",
    category: "Образование",
    image: "/img/6ba47cf5-6736-4a9c-bf2f-b26362f5a253.jpg",
    description: "Яркий логотип для детского приложения",
    colors: ["Радуга"]
  },
  {
    id: 10,
    title: "Medical Clinic",
    category: "Медицина",
    image: "/img/3388f408-6a9f-42bf-b0aa-0c240b06950f.jpg",
    description: "Профессиональный логотип для медицинской клиники",
    colors: ["Синий", "Белый"]
  },
  
  // Дополнительные логотипы из галереи
  {
    id: 11,
    title: "Wellness Center",
    category: "Здоровье",
    image: "/img/52d0cdb1-d33f-40a4-8312-790040c3bf1f.jpg",
    description: "Гармоничный логотип для центра здоровья",
    colors: ["Зеленый", "Белый"]
  },
  {
    id: 12,
    title: "Art Gallery",
    category: "Искусство",
    image: "/img/5639f9e8-313a-419b-abdd-070b0c7948d3.jpg",
    description: "Утонченный логотип для художественной галереи",
    colors: ["Черный", "Золотой"]
  }
];

interface LogoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LogoModal({ isOpen, onClose }: LogoModalProps) {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  
  if (!isOpen) return null;

  const categories = ["Все", ...new Set(logos.map(logo => logo.category))];
  const filteredLogos = selectedCategory === "Все" 
    ? logos 
    : logos.filter(logo => logo.category === selectedCategory);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold font-heading">Коллекция логотипов</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <Icon name="X" size={24} />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Logo Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLogos.map((logo) => (
              <Card key={logo.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
                  <img
                    src={logo.image}
                    alt={logo.title}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {logo.category}
                  </Badge>
                  <h3 className="font-semibold font-heading mb-2 text-sm">
                    {logo.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mb-3 font-body">
                    {logo.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Icon name="Palette" size={12} className="text-primary" />
                    <span className="text-xs text-muted-foreground">
                      {logo.colors.join(", ")}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
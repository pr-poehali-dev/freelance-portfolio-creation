import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const brandings = [
  {
    id: 1,
    title: "Фирменный стиль стартапа",
    category: "Tech",
    image: "/img/73209857-d7d0-41b0-8ea1-ceea54845abb.jpg",
    description: "Полный фирменный стиль для IT-стартапа включая логотип, цвета и типографику",
    elements: ["Логотип", "Цветовая палитра", "Шрифты", "Визитки"],
    industry: "Технологии"
  },
  {
    id: 2,
    title: "Ребрендинг ресторана",
    category: "HoReCa",
    image: "/img/f83c9943-9fd3-4310-b20b-83564f2ecf59.jpg",
    description: "Современный ребрендинг семейного ресторана с сохранением домашней атмосферы",
    elements: ["Логотип", "Меню", "Униформа", "Интерьерные элементы"],
    industry: "Ресторанный бизнес"
  },
  {
    id: 3,
    title: "Брендинг wellness-центра",
    category: "Здоровье",
    image: "/img/52d0cdb1-d33f-40a4-8312-790040c3bf1f.jpg",
    description: "Спокойный и гармоничный брендинг для центра красоты и здоровья",
    elements: ["Логотип", "Упаковка", "Сертификаты", "Вывеска"],
    industry: "Красота и здоровье"
  },
  {
    id: 4,
    title: "Корпоративная айдентика",
    category: "Корпорации",
    image: "/img/5639f9e8-313a-419b-abdd-070b0c7948d3.jpg",
    description: "Строгий корпоративный стиль для финансовой компании",
    elements: ["Логотип", "Презентации", "Документы", "Сувениры"],
    industry: "Финансы"
  },
  {
    id: 5,
    title: "Брендинг эко-продуктов",
    category: "Эко",
    image: "/img/9c438725-074f-4698-8641-34366ccba25c.jpg",
    description: "Натуральный брендинг для линейки органических продуктов",
    elements: ["Упаковка", "Этикетки", "Стикеры", "Каталог"],
    industry: "Продукты питания"
  },
  {
    id: 6,
    title: "Детский образовательный бренд",
    category: "Образование", 
    image: "/img/d3a1f6a5-92ee-491f-8d97-0516ec781953.jpg",
    description: "Яркий и дружелюбный брендинг для детского развивающего центра",
    elements: ["Логотип", "Игрушки", "Материалы", "Дипломы"],
    industry: "Детское образование"
  }
];

interface BrandingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrandingModal({ isOpen, onClose }: BrandingModalProps) {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  
  if (!isOpen) return null;

  const categories = ["Все", ...new Set(brandings.map(brand => brand.category))];
  const filteredBrandings = selectedCategory === "Все" 
    ? brandings 
    : brandings.filter(brand => brand.category === selectedCategory);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold font-heading">Брендинг проекты</h2>
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

          {/* Branding Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredBrandings.map((brand) => (
              <Card key={brand.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
                  <img
                    src={brand.image}
                    alt={brand.title}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {brand.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{brand.industry}</span>
                  </div>
                  
                  <h3 className="font-semibold font-heading mb-3 text-lg">
                    {brand.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 font-body leading-relaxed">
                    {brand.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Package" size={14} className="text-primary" />
                      <span className="text-xs font-medium">Включает:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {brand.elements.map((element, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs px-2 py-1">
                          {element}
                        </Badge>
                      ))}
                    </div>
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
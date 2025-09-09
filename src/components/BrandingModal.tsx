import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const brandings = [
  {
    id: 1,
    title: "Фирменный стиль стартапа",
    category: "Технологии",
    image: "/img/73209857-d7d0-41b0-8ea1-ceea54845abb.jpg",
    description: "Полный фирменный стиль для IT-стартапа включая логотип, цвета и типографику",
    elements: ["Логотип", "Цветовая палитра", "Шрифты", "Визитки"],
    industry: "Технологии"
  },
  {
    id: 2,
    title: "Брендинг премиум-отеля",
    category: "Гостиничный",
    image: "/img/26c09e91-6f6d-4432-9081-3ec6aef11855.jpg",
    description: "Роскошная айдентика для сети бутик-отелей с элементами классики",
    elements: ["Логотип", "Униформа", "Аменити", "Навигация"],
    industry: "Гостиничный бизнес"
  },
  {
    id: 3,
    title: "Крафтовая пивоварня",
    category: "Алкоголь",
    image: "/img/cc747421-070c-4389-a7b7-3f5c9f74e023.jpg",
    description: "Винтажная айдентика для локальной крафтовой пивоварни",
    elements: ["Логотип", "Этикетки", "Упаковка", "Мерч"],
    industry: "Производство напитков"
  },
  {
    id: 4,
    title: "Ребрендинг юридической фирмы",
    category: "Юриспруденция",
    image: "/img/dc7980c6-e2a1-469d-a0cb-edd0738028a1.jpg",
    description: "Строгий и надежный брендинг для крупной юридической компании",
    elements: ["Логотип", "Документооборот", "Вывеска", "Сайт"],
    industry: "Юридические услуги"
  },
  {
    id: 5,
    title: "Семейная пекарня",
    category: "Пищевое производство",
    image: "/img/85463dd1-e4a6-4b3e-a4ef-981187091e7d.jpg",
    description: "Теплый домашний брендинг для семейной пекарни с традициями",
    elements: ["Логотип", "Упаковка", "Интерьер", "Рецептуры"],
    industry: "Хлебопекарное дело"
  },
  {
    id: 6,
    title: "Ветеринарная клиника",
    category: "Медицина",
    image: "/img/1f37cec1-d154-419e-985b-795aec720630.jpg",
    description: "Дружелюбный и профессиональный брендинг для ветклиники",
    elements: ["Логотип", "Медкарты", "Униформа", "Игрушки"],
    industry: "Ветеринария"
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
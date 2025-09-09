import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const illustrations = [
  {
    id: 1,
    title: "Иллюстрации для книжной обложки",
    category: "Книги",
    image: "/img/7a40dfd5-d627-4618-975d-c43f6da101ac.jpg",
    description: "Профессиональная иллюстрация для обложки книги",
    style: "Типографика",
    colors: ["По жанру"],
    price: "от 1500₽"
  },
  {
    id: 2,
    title: "Рисование комиксов",
    category: "Комиксы",
    image: "/img/711e4b97-e673-4554-b714-14511eef8fa0.jpg",
    description: "Креативные комиксы в любом стиле и формате",
    style: "Мультяшный",
    colors: ["Яркие", "Насыщенные"],
    price: "от 3000₽"
  },
  {
    id: 3,
    title: "Раскадровка",
    category: "Препродакшн",
    image: "/img/22341331-6929-401e-a269-74e55a7f915e.jpg",
    description: "Детальная раскадровка для рекламы и мультфильмов",
    style: "Скетч",
    colors: ["Монохром", "Цветной"],
    price: "от 2200₽"
  },
  {
    id: 4,
    title: "Скрайбинг",
    category: "Обучение",
    image: "/img/0f046d48-e5bb-45fc-873f-4281e78e9643.jpg",
    description: "Обучающие рисованные презентации и объяснительные видео",
    style: "Минимализм",
    colors: ["Монохром", "Яркие акценты"],
    price: "от 2040₽"
  },
  {
    id: 5,
    title: "Раскадровка видео",
    category: "Видеопродакшн",
    image: "/img/38b8474d-e465-4d3a-b595-15ff2699d691.jpg",
    description: "Покадровая визуализация сюжета для видеороликов",
    style: "Схематичный",
    colors: ["Черно-белые", "Цветные"],
    price: "от 1700₽"
  },
  {
    id: 6,
    title: "Векторные иллюстрации",
    category: "Векторная графика",
    image: "/img/48bea2f2-19d0-4d31-92d1-f05ca059e0c5.jpg",
    description: "Масштабируемая векторная графика высокого качества",
    style: "Плоский дизайн",
    colors: ["Любая палитра"],
    price: "от 1500₽"
  },
  {
    id: 7,
    title: "Fashion-иллюстрации",
    category: "Модная иллюстрация",
    image: "/img/7a40dfd5-d627-4618-975d-c43f6da101ac.jpg",
    description: "Стильная фэшн-иллюстрация для модных брендов",
    style: "Элегантный",
    colors: ["Пастельные", "Контрастные"],
    price: "от 2000₽"
  },
  {
    id: 8,
    title: "Иллюстрации к детским книгам",
    category: "Детские книги",
    image: "/img/711e4b97-e673-4554-b714-14511eef8fa0.jpg",
    description: "Колоритные иллюстрации для детской литературы",
    style: "Сказочный",
    colors: ["Яркие", "Добрые", "Дружелюбные"],
    price: "от 2500₽"
  }
];

interface IllustrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IllustrationModal({ isOpen, onClose }: IllustrationModalProps) {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  
  if (!isOpen) return null;

  const categories = ["Все", ...new Set(illustrations.map(illustration => illustration.category))];
  const filteredIllustrations = selectedCategory === "Все" 
    ? illustrations 
    : illustrations.filter(illustration => illustration.category === selectedCategory);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold font-heading">Коллекция иллюстраций</h2>
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

          {/* Illustration Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIllustrations.map((illustration) => (
              <Card key={illustration.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
                  <img
                    src={illustration.image}
                    alt={illustration.title}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {illustration.category}
                  </Badge>
                  <h3 className="font-semibold font-heading mb-2 text-sm">
                    {illustration.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mb-3 font-body">
                    {illustration.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Brush" size={12} className="text-primary" />
                      <span className="text-xs text-muted-foreground">
                        {illustration.style}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Palette" size={12} className="text-primary" />
                      <span className="text-xs text-muted-foreground">
                        {illustration.colors.join(", ")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <Icon name="DollarSign" size={12} className="text-green-600" />
                      <span className="text-xs font-semibold text-green-600">
                        {illustration.price}
                      </span>
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
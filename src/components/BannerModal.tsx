import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const banners = [
  {
    id: 1,
    title: "Баннер для ВК",
    category: "Социальные сети",
    image: "/img/511ac964-44a6-45bd-9df4-8c1122a2be60.jpg",
    description: "Стильный баннер для сообщества ВКонтакте",
    size: "1590x400",
    colors: ["Синий", "Белый"],
    price: "от 520₽"
  },
  {
    id: 2,
    title: "Анимированный баннер",
    category: "Анимация",
    image: "/img/9c438725-074f-4698-8641-34366ccba25c.jpg",
    description: "Динамичный анимированный баннер для привлечения внимания",
    size: "1200x400",
    colors: ["Многоцветный"],
    price: "от 1000₽"
  },
  {
    id: 3,
    title: "Баннер для YouTube",
    category: "Видео",
    image: "/img/f456d7d9-2fe1-429c-9bd1-7ff28ccd54ff.jpg",
    description: "Привлекающий баннер-превью для YouTube канала",
    size: "2560x1440",
    colors: ["Красный", "Белый"],
    price: "от 900₽"
  },
  {
    id: 4,
    title: "Баннер для рассылки",
    category: "Email-маркетинг",
    image: "/img/d3a1f6a5-92ee-491f-8d97-0516ec781953.jpg",
    description: "Профессиональный баннер для email-кампаний",
    size: "600x400",
    colors: ["Зеленый", "Белый"],
    price: "от 1000₽"
  },
  {
    id: 5,
    title: "Баннер для форума",
    category: "Веб-реклама",
    image: "/img/7812978e-fe20-426e-aa93-989cd6855bbb.jpg",
    description: "Информативный баннер для размещения на форумах",
    size: "728x90",
    colors: ["Фиолетовый", "Белый"],
    price: "от 1000₽"
  },
  {
    id: 6,
    title: "Баннер для соцсетей",
    category: "Социальные сети",
    image: "/img/f83c9943-9fd3-4310-b20b-83564f2ecf59.jpg",
    description: "Универсальный баннер для всех социальных сетей",
    size: "1200x630",
    colors: ["Розовый", "Белый"],
    price: "от 1000₽"
  },
  {
    id: 7,
    title: "Баннер для Авито",
    category: "Маркетплейсы",
    image: "/img/511ac964-44a6-45bd-9df4-8c1122a2be60.jpg",
    description: "Продающий баннер для объявлений на Авито",
    size: "1200x800",
    colors: ["Оранжевый", "Белый"],
    price: "от 1000₽"
  },
  {
    id: 8,
    title: "Баннер для Twitch",
    category: "Стриминг",
    image: "/img/9c438725-074f-4698-8641-34366ccba25c.jpg",
    description: "Игровой баннер для стримингового канала Twitch",
    size: "1920x480",
    colors: ["Фиолетовый", "Неон"],
    price: "от 580₽"
  },
  {
    id: 9,
    title: "Ресайз баннеров",
    category: "Технические услуги",
    image: "/img/f456d7d9-2fe1-429c-9bd1-7ff28ccd54ff.jpg",
    description: "Адаптация баннеров под разные размеры и платформы",
    size: "Любой",
    colors: ["Сохранение оригинала"],
    price: "от 840₽"
  },
  {
    id: 10,
    title: "Видеобаннер",
    category: "Видео",
    image: "/img/d3a1f6a5-92ee-491f-8d97-0516ec781953.jpg",
    description: "Короткий видеобаннер для максимального вовлечения",
    size: "1920x1080",
    colors: ["Динамические"],
    price: "от 600₽"
  },
  {
    id: 11,
    title: "Интерактивный баннер",
    category: "Веб-технологии",
    image: "/img/7812978e-fe20-426e-aa93-989cd6855bbb.jpg",
    description: "Интерактивный HTML5 баннер с анимацией и кнопками",
    size: "Адаптивный",
    colors: ["По макету"],
    price: "от 1000₽"
  }
];

interface BannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BannerModal({ isOpen, onClose }: BannerModalProps) {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  
  if (!isOpen) return null;

  const categories = ["Все", ...new Set(banners.map(banner => banner.category))];
  const filteredBanners = selectedCategory === "Все" 
    ? banners 
    : banners.filter(banner => banner.category === selectedCategory);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold font-heading">Коллекция баннеров</h2>
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

          {/* Banner Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBanners.map((banner) => (
              <Card key={banner.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {banner.category}
                  </Badge>
                  <h3 className="font-semibold font-heading mb-2 text-sm">
                    {banner.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mb-3 font-body">
                    {banner.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon name="Palette" size={12} className="text-primary" />
                      <span className="text-xs text-muted-foreground">
                        {banner.colors.join(", ")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Monitor" size={12} className="text-primary" />
                      <span className="text-xs text-muted-foreground">
                        {banner.size}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <Icon name="DollarSign" size={12} className="text-green-600" />
                      <span className="text-xs font-semibold text-green-600">
                        {banner.price}
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
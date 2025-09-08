import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const banners = [
  {
    id: 1,
    title: "Рекламный баннер для Instagram",
    category: "Социальные сети",
    image: "/img/511ac964-44a6-45bd-9df4-8c1122a2be60.jpg",
    description: "Яркий баннер для продвижения товаров в Instagram",
    size: "1080x1080",
    colors: ["Оранжевый", "Белый"]
  },
  {
    id: 2,
    title: "Баннер для интернет-магазина",
    category: "E-commerce",
    image: "/img/9c438725-074f-4698-8641-34366ccba25c.jpg",
    description: "Продающий баннер для главной страницы магазина",
    size: "1200x400",
    colors: ["Синий", "Желтый"]
  },
  {
    id: 3,
    title: "YouTube превью",
    category: "YouTube",
    image: "/img/f456d7d9-2fe1-429c-9bd1-7ff28ccd54ff.jpg",
    description: "Привлекающее превью для видео на YouTube",
    size: "1280x720",
    colors: ["Красный", "Белый"]
  },
  {
    id: 4,
    title: "Баннер для email-рассылки",
    category: "Email",
    image: "/img/d3a1f6a5-92ee-491f-8d97-0516ec781953.jpg",
    description: "Профессиональный баннер для email-кампании",
    size: "600x400",
    colors: ["Зеленый", "Белый"]
  },
  {
    id: 5,
    title: "Рекламный баннер для сайта",
    category: "Веб-реклама",
    image: "/img/7812978e-fe20-426e-aa93-989cd6855bbb.jpg",
    description: "Конверсионный баннер для размещения на сайтах",
    size: "728x90",
    colors: ["Фиолетовый", "Белый"]
  },
  {
    id: 6,
    title: "Stories для Instagram",
    category: "Социальные сети",
    image: "/img/f83c9943-9fd3-4310-b20b-83564f2ecf59.jpg",
    description: "Стильные stories для продвижения в Instagram",
    size: "1080x1920",
    colors: ["Розовый", "Белый"]
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
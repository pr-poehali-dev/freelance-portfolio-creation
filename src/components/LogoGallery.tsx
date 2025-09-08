import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const logos = [
  {
    id: 1,
    title: "TechStartup Logo",
    category: "Технологии",
    image: "/img/28613a00-cfe4-453a-a387-3ef5f9ce8357.jpg",
    description: "Минималистичный логотип для технологического стартапа",
    colors: ["Синий", "Черный"],
    year: "2024"
  },
  {
    id: 2,
    title: "Luxury Brand",
    category: "Мода",
    image: "/img/bd21e2fb-1cc4-4f76-86dc-f7961efd1704.jpg",
    description: "Элегантный логотип для люксового бренда",
    colors: ["Золотой", "Черный"],
    year: "2024"
  },
  {
    id: 3,
    title: "Organic Food Co",
    category: "Еда",
    image: "/img/a160b94a-9c2f-4cdc-b0fa-86d449ef4f91.jpg",
    description: "Эко-дружелюбный логотип для органических продуктов",
    colors: ["Зеленый", "Натуральный"],
    year: "2024"
  },
  {
    id: 4,
    title: "Power Gym",
    category: "Фитнес",
    image: "/img/3e823b76-f01b-4102-919f-766678dd412a.jpg",
    description: "Энергичный логотип для спортивного зала",
    colors: ["Красный", "Черный"],
    year: "2024"
  },
  {
    id: 5,
    title: "Kids Learning App",
    category: "Образование",
    image: "/img/6ba47cf5-6736-4a9c-bf2f-b26362f5a253.jpg",
    description: "Яркий логотип для детского обучающего приложения",
    colors: ["Радуга"],
    year: "2024"
  },
  {
    id: 6,
    title: "Medical Clinic",
    category: "Медицина",
    image: "/img/3388f408-6a9f-42bf-b0aa-0c240b06950f.jpg",
    description: "Профессиональный логотип для медицинской клиники",
    colors: ["Синий", "Белый"],
    year: "2024"
  }
];

export default function LogoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const categories = ["Все", ...new Set(logos.map(logo => logo.category))];
  
  const filteredLogos = selectedCategory === "Все" 
    ? logos 
    : logos.filter(logo => logo.category === selectedCategory);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredLogos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredLogos.length) % filteredLogos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentLogo = filteredLogos[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setSelectedCategory(category);
              setCurrentIndex(0);
            }}
            className="text-sm"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Main Gallery */}
      <div className="relative">
        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white"
          onClick={prevSlide}
          disabled={filteredLogos.length <= 1}
        >
          <Icon name="ChevronLeft" size={20} />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white"
          onClick={nextSlide}
          disabled={filteredLogos.length <= 1}
        >
          <Icon name="ChevronRight" size={20} />
        </Button>

        {/* Main Card */}
        <Card className="overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
              <img
                src={currentLogo?.image}
                alt={currentLogo?.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Info Section */}
            <div className="p-8 flex flex-col justify-center">
              <Badge variant="secondary" className="w-fit mb-3">
                {currentLogo?.category}
              </Badge>
              
              <h3 className="text-2xl font-bold font-heading mb-4">
                {currentLogo?.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 font-body leading-relaxed">
                {currentLogo?.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="Palette" size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Цвета: {currentLogo?.colors.join(", ")}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Год: {currentLogo?.year}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {filteredLogos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary scale-110'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-4 text-sm text-muted-foreground">
          {currentIndex + 1} из {filteredLogos.length}
        </div>
      </div>
    </div>
  );
}
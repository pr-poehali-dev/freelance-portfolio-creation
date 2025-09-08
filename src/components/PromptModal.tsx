import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const prompts = [
  {
    id: 1,
    title: "Ассистент продаж",
    category: "Продажи",
    description: "Промпт для создания персонализированных предложений клиентам",
    useCase: "Увеличение конверсии на 40%",
    tools: ["ChatGPT", "Claude"],
    complexity: "Средняя",
    result: "+40% конверсии"
  },
  {
    id: 2,
    title: "Копирайтер для email",
    category: "Маркетинг",
    description: "Генерация цепляющих заголовков и текстов для email-рассылок",
    useCase: "Email-маркетинг для e-commerce",
    tools: ["GPT-4", "Jasper"],
    complexity: "Простая",
    result: "+25% открываемость"
  },
  {
    id: 3,
    title: "Аналитик конкурентов",
    category: "Аналитика",
    description: "Автоматический анализ стратегий и слабых мест конкурентов",
    useCase: "Исследование рынка",
    tools: ["ChatGPT", "Perplexity"],
    complexity: "Сложная",
    result: "Экономия 20 часов"
  },
  {
    id: 4,
    title: "HR-рекрутер",
    category: "HR",
    description: "Скрининг резюме и подготовка вопросов для собеседования",
    useCase: "Автоматизация найма",
    tools: ["Claude", "GPT-4"],
    complexity: "Средняя",
    result: "50% быстрее отбор"
  },
  {
    id: 5,
    title: "SEO-оптимизатор",
    category: "SEO",
    description: "Генерация мета-тегов, описаний и семантического ядра",
    useCase: "Продвижение сайтов",
    tools: ["ChatGPT", "Writesonic"],
    complexity: "Средняя",
    result: "+30% органический трафик"
  },
  {
    id: 6,
    title: "Персональный коуч",
    category: "Развитие",
    description: "ИИ-коуч для постановки целей и мотивации команды",
    useCase: "Развитие персонала",
    tools: ["GPT-4", "Claude"],
    complexity: "Сложная",
    result: "+60% мотивация"
  },
  {
    id: 7,
    title: "Генератор идей",
    category: "Креатив",
    description: "Креативные идеи для контента, продуктов и кампаний",
    useCase: "Творческие проекты",
    tools: ["GPT-4", "Midjourney"],
    complexity: "Простая",
    result: "100+ идей/час"
  },
  {
    id: 8,
    title: "Финансовый аналитик",
    category: "Финансы",
    description: "Анализ инвестиций, рисков и финансовых показателей",
    useCase: "Инвестиционные решения",
    tools: ["Claude", "GPT-4"],
    complexity: "Сложная",
    result: "Снижение рисков 25%"
  }
];

interface PromptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PromptModal({ isOpen, onClose }: PromptModalProps) {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  
  if (!isOpen) return null;

  const categories = ["Все", ...new Set(prompts.map(prompt => prompt.category))];
  const filteredPrompts = selectedCategory === "Все" 
    ? prompts 
    : prompts.filter(prompt => prompt.category === selectedCategory);

  const getComplexityColor = (complexity: string) => {
    switch(complexity) {
      case "Простая": return "text-green-600 bg-green-50";
      case "Средняя": return "text-orange-600 bg-orange-50";
      case "Сложная": return "text-red-600 bg-red-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold font-heading">ИИ-Промпты для бизнеса</h2>
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

          {/* Prompt Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrompts.map((prompt) => (
              <Card key={prompt.id} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/20">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {prompt.category}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getComplexityColor(prompt.complexity)}`}
                    >
                      {prompt.complexity}
                    </Badge>
                  </div>
                  
                  <h3 className="font-semibold font-heading mb-3 text-lg group-hover:text-primary transition-colors">
                    {prompt.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 font-body leading-relaxed">
                    {prompt.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Icon name="Target" size={14} className="text-primary" />
                      <span className="text-xs text-muted-foreground">{prompt.useCase}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Icon name="Cpu" size={14} className="text-primary" />
                      <div className="flex gap-1">
                        {prompt.tools.map((tool, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs px-2 py-1">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                      <Icon name="TrendingUp" size={14} className="text-green-600" />
                      <span className="text-xs font-medium text-green-600">{prompt.result}</span>
                    </div>
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="w-full mt-4"
                    variant="outline"
                  >
                    <Icon name="Download" size={14} className="mr-2" />
                    Получить промпт
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
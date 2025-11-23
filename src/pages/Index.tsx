import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [showStory, setShowStory] = useState(false);
  const [storyStep, setStoryStep] = useState(0);

  const handleClose = () => {
    window.close();
    setTimeout(() => {
      window.location.href = 'about:blank';
    }, 100);
  };

  const handleAccept = () => {
    setShowStory(true);
    setStoryStep(0);
  };

  const storySteps = [
    { text: '2025.07.16', emoji: '💕' },
    { text: '2025.07.30', emoji: '✨' },
    { text: 'люблю тебя', emoji: '💖' },
    { text: 'денька', emoji: '🌸' }
  ];

  const nextStep = () => {
    if (storyStep < storySteps.length - 1) {
      setStoryStep(storyStep + 1);
    }
  };

  if (showStory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-accent overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-6xl animate-float">🌸</div>
          <div className="absolute top-32 right-20 text-5xl animate-float" style={{ animationDelay: '1s' }}>🌺</div>
          <div className="absolute bottom-20 left-32 text-6xl animate-float" style={{ animationDelay: '2s' }}>🌼</div>
          <div className="absolute bottom-40 right-10 text-5xl animate-float" style={{ animationDelay: '0.5s' }}>🌷</div>
          <div className="absolute top-1/2 left-1/4 text-4xl animate-float" style={{ animationDelay: '1.5s' }}>🦋</div>
          <div className="absolute top-1/3 right-1/3 text-4xl animate-float" style={{ animationDelay: '2.5s' }}>✨</div>
        </div>

        <div className="min-h-screen flex items-center justify-center p-8 relative z-10">
          <div className="text-center space-y-12 animate-fade-in">
            <h1 className="text-7xl md:text-9xl font-bold text-primary mb-8 handwriting">
              Наша История
            </h1>
            
            <div className="space-y-8">
              {storySteps.slice(0, storyStep + 1).map((step, index) => (
                <div
                  key={index}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-6xl">{step.emoji}</span>
                    <p className="text-5xl md:text-7xl font-semibold text-primary handwriting">
                      {step.text}
                    </p>
                    <span className="text-6xl">{step.emoji}</span>
                  </div>
                </div>
              ))}
            </div>

            {storyStep < storySteps.length - 1 && (
              <Button
                onClick={nextStep}
                size="lg"
                className="mt-16 text-2xl px-12 py-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground animate-scale-in shadow-2xl"
              >
                Дальше 💕
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-accent overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 text-6xl animate-float">🌸</div>
        <div className="absolute top-32 right-20 text-5xl animate-float" style={{ animationDelay: '1s' }}>🌺</div>
        <div className="absolute bottom-20 left-32 text-6xl animate-float" style={{ animationDelay: '2s' }}>🌼</div>
        <div className="absolute bottom-40 right-10 text-5xl animate-float" style={{ animationDelay: '0.5s' }}>🌷</div>
        <div className="absolute top-1/2 left-1/4 text-4xl animate-float" style={{ animationDelay: '1.5s' }}>🦋</div>
        <div className="absolute top-1/3 right-1/3 text-4xl animate-float" style={{ animationDelay: '2.5s' }}>✨</div>
        <div className="absolute top-2/3 left-1/2 text-5xl animate-float" style={{ animationDelay: '3s' }}>💕</div>
        <div className="absolute top-1/4 left-10 text-4xl animate-float" style={{ animationDelay: '0.8s' }}>🎀</div>
      </div>

      <div className="min-h-screen flex items-center justify-center p-8 relative z-10">
        <div className="text-center space-y-16 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4 handwriting leading-tight">
              Киривушка
            </h1>
            <p className="text-6xl md:text-8xl font-semibold text-primary handwriting animate-scale-in" style={{ animationDelay: '0.3s' }}>
              Я тебя люблю 💖
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={handleClose}
              variant="outline"
              size="lg"
              className="text-2xl px-12 py-8 rounded-full border-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-xl"
            >
              Закрыть
            </Button>
            <Button
              onClick={handleAccept}
              size="lg"
              className="text-2xl px-12 py-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:scale-105 transition-all duration-300"
            >
              И я тебя 💕
            </Button>
          </div>

          <p className="text-3xl text-primary/60 handwriting animate-fade-in" style={{ animationDelay: '0.9s' }}>
            Для самой прекрасной девочки на свете ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

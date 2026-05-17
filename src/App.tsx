import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book as BookIcon, Cross, RefreshCcw, ExternalLink, Download, Heart } from 'lucide-react';
import { books, Book } from './data/books';

export default function App() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lang, setLang] = useState<'en' | 'cn'>('en');

  const getRandomBook = useCallback(() => {
    setIsAnimating(true);
    // Add a slight delay to the state change to allow for exit animation
    setTimeout(() => {
      let nextBook;
      do {
        nextBook = books[Math.floor(Math.random() * books.length)];
      } while (selectedBook && nextBook.id === selectedBook.id);
      
      setSelectedBook(nextBook);
      setIsAnimating(false);
    }, 400);
  }, [selectedBook]);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'cn' : 'en');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 mb-16 selection:bg-accent selection:text-white transition-colors duration-500">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05]" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/paper-fibers.png")` }} />

      {/* Language Switcher - Fixed Position for better visibility */}
      <div className="fixed top-8 right-8 z-50">
         <button 
          onClick={toggleLang}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-ink/20 bg-paper/80 backdrop-blur-sm font-sans text-[11px] uppercase tracking-widest hover:bg-ink hover:text-paper transition-all shadow-sm"
         >
          {lang === 'en' ? '中文' : 'ENGLISH'}
         </button>
      </div>

      <header className="mb-12 text-center max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Cross className="w-5 h-5 text-accent stroke-[1.5px]" />
          <span className="uppercase tracking-[0.2em] text-sm font-sans font-medium text-ink/60">
            {lang === 'en' ? 'The New Yorker Aesthetics' : '纽约客式审美'}
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl font-medium mb-6 leading-tight italic"
        >
          An Hour of Reading <span className="block md:inline md:mx-2 font-serif font-normal not-italic opacity-40">/</span> 一小时阅读
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-ink/70 leading-relaxed max-w-xl mx-auto"
        >
          {lang === 'en' 
            ? 'Inspired by Yiyun Li. A curated selection of works to heal the spirit or confront the world with clarity.' 
            : '灵感源自李翊云。精心挑选的文学精神食粮，旨在治愈心灵或以清晰的视角面对世界。'}
        </motion.p>
      </header>

      <main className="relative w-full max-w-4xl flex flex-col items-center">
        {!selectedBook ? (
          <motion.button
            id="find-remedy-btn"
            whileHover={{ scale: 1.02, backgroundColor: "var(--color-ink)", color: "var(--color-paper)" }}
            whileTap={{ scale: 0.98 }}
            onClick={getRandomBook}
            className="group relative px-12 py-5 border border-ink/20 rounded-full font-sans tracking-widest text-sm uppercase transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">
              {lang === 'en' ? 'Seek Mental Resonance' : '寻找精神共鸣'}
            </span>
            <motion.div 
              className="absolute inset-0 bg-ink"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        ) : (
          <AnimatePresence mode="wait">
            {!isAnimating && (
              <motion.div
                key={selectedBook.id}
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -20 }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className="w-full bg-white border border-ink/10 p-8 md:p-16 shadow-2xl rounded-sm relative"
              >
                {/* Decorative Elements */}
                <div className="absolute top-8 right-8 text-accent/10">
                  <BookIcon className="w-12 h-12" />
                </div>

                <div className="max-w-2xl mx-auto">
                  <header className="mb-8 border-b border-ink/5 pb-8">
                    <h2 className="font-display text-3xl md:text-5xl mb-2">
                      {lang === 'en' ? selectedBook.title : selectedBook.title_cn}
                    </h2>
                    <p className="text-xl md:text-2xl italic text-ink/60 font-serif">
                      {lang === 'en' ? 'by ' + selectedBook.author : '作者：' + selectedBook.author_cn}
                    </p>
                  </header>

                  <blockquote className="my-10 pl-8 border-l-2 border-accent/20">
                    <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-ink/90">
                      &ldquo;{lang === 'en' ? selectedBook.quote : selectedBook.quote_cn}&rdquo;
                    </p>
                  </blockquote>

                  <div className="prose prose-lg text-ink/80 leading-relaxed font-serif">
                    <p>{lang === 'en' ? selectedBook.description : selectedBook.description_cn}</p>
                  </div>

                  <footer className="mt-12 pt-8 border-t border-ink/5 flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex gap-4">
                      {selectedBook.isPublicDomain ? (
                        <a 
                          href={selectedBook.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-6 py-2 bg-ink text-paper rounded-full font-sans text-xs uppercase tracking-wider hover:bg-accent transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                          {lang === 'en' ? 'Download Free eBook' : '免费下载电子书'}
                        </a>
                      ) : (
                        <a 
                          href={selectedBook.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-6 py-2 border border-ink bg-transparent text-ink rounded-full font-sans text-xs uppercase tracking-wider hover:bg-ink hover:text-paper transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {lang === 'en' ? 'Find this Book' : '寻找此书'}
                        </a>
                      )}
                    </div>

                    <button
                      id="next-remedy-btn"
                      onClick={getRandomBook}
                      className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] py-2 px-4 hover:opacity-60 transition-opacity"
                    >
                      <RefreshCcw className={`w-3.5 h-3.5 ${isAnimating ? 'animate-spin' : ''}`} />
                      {lang === 'en' ? 'Another Prescription' : '另一份方案'}
                    </button>
                  </footer>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </main>

      <footer className="mt-auto pt-20 pb-8 text-center text-ink/40 font-sans text-[10px] uppercase tracking-[0.3em]">
        &copy; {new Date().getFullYear()} An Hour of Reading &bull; {lang === 'en' ? 'Curated for the Soul' : '为灵魂策展'}
      </footer>
    </div>
  );
}

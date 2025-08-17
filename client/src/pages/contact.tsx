import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function Contact() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center text-neural-blue hover:text-quantum-purple transition-colors mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Вернуться на главную
          </button>
          <div className="flex items-center space-x-3">
            <MessageCircle className="w-8 h-8 text-neural-blue" />
            <h1 className="text-3xl font-bold text-gray-900">Контакты</h1>
          </div>
          <p className="text-gray-600 mt-2">Свяжитесь с нами любым удобным способом</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Contact Information */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Контактная информация</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-neural-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-700">info@proxid.by</p>
                    <p className="text-gray-700">support@proxid.by</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-neural-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Телефон</h3>
                    <p className="text-gray-700">+375 (XX) XXX-XX-XX</p>
                    <p className="text-gray-700">+375 (XX) XXX-XX-XX</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-neural-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Адрес</h3>
                    <p className="text-gray-700">Республика Беларусь</p>
                    <p className="text-gray-700">г. Минск, ул. Примерная, д. X</p>
                    <p className="text-gray-700">220000</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-neural-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Время работы</h3>
                    <p className="text-gray-700">Понедельник - Пятница: 9:00 - 18:00</p>
                    <p className="text-gray-700">Суббота: 10:00 - 16:00</p>
                    <p className="text-gray-700">Воскресенье: выходной</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-neural-blue/10 to-quantum-purple/10 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Специализированные контакты</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Техническая поддержка</h4>
                    <p className="text-gray-700 text-sm">support@proxid.by</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Вопросы по безопасности</h4>
                    <p className="text-gray-700 text-sm">security@proxid.by</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Юридические вопросы</h4>
                    <p className="text-gray-700 text-sm">legal@proxid.by</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Партнерство</h4>
                    <p className="text-gray-700 text-sm">partnership@proxid.by</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Отправить сообщение</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neural-blue focus:border-transparent transition-all duration-200"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neural-blue focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Тема *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neural-blue focus:border-transparent transition-all duration-200"
                >
                  <option value="">Выберите тему</option>
                  <option value="general">Общий вопрос</option>
                  <option value="technical">Техническая поддержка</option>
                  <option value="billing">Вопросы по оплате</option>
                  <option value="partnership">Партнерство</option>
                  <option value="legal">Юридические вопросы</option>
                  <option value="other">Другое</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neural-blue focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Опишите ваш вопрос или предложение..."
                ></textarea>
              </div>
              
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="w-4 h-4 text-neural-blue border-gray-300 rounded focus:ring-neural-blue mt-1"
                />
                <label htmlFor="privacy" className="text-sm text-gray-700">
                  Я согласен с <button type="button" onClick={() => setLocation("/privacy")} className="text-neural-blue hover:underline">Политикой конфиденциальности</button> и <button type="button" onClick={() => setLocation("/terms")} className="text-neural-blue hover:underline">Пользовательским соглашением</button>
                </label>
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-neural-blue to-quantum-purple text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Отправить сообщение
              </motion.button>
            </form>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Как быстро вы отвечаете на сообщения?</h3>
                <p className="text-gray-700">Мы стремимся отвечать на все сообщения в течение 24 часов в рабочие дни.</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Могу ли я получить консультацию по телефону?</h3>
                <p className="text-gray-700">Да, вы можете позвонить нам в рабочее время для получения консультации.</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Есть ли у вас офис для личных встреч?</h3>
                <p className="text-gray-700">Да, мы можем организовать личную встречу в нашем офисе по предварительной записи.</p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}

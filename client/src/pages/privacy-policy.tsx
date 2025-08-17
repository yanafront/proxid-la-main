import { motion } from "framer-motion";
import { ArrowLeft, Shield, Lock, Eye, Database } from "lucide-react";
import { useLocation } from "wouter";

export default function PrivacyPolicy() {
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
            <Shield className="w-8 h-8 text-neural-blue" />
            <h1 className="text-3xl font-bold text-gray-900">Политика конфиденциальности</h1>
          </div>
          <p className="text-gray-600 mt-2">Последнее обновление: {new Date().toLocaleDateString('ru-RU')}</p>
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
          {/* Introduction */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Общие положения</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки персональных данных
              пользователей платформы ProxiD (далее — «Платформа», «мы», «нас», «наш») в соответствии с требованиями
              Закона Республики Беларусь «О защите персональных данных» от 7 мая 2021 г. № 99-З и иных нормативных правовых актов.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Используя Платформу, вы соглашаетесь с условиями настоящей Политики и даете согласие на обработку
              ваших персональных данных в соответствии с указанными условиями.
            </p>
          </section>

          {/* Data Collection */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Собираемые персональные данные</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Database className="w-6 h-6 text-neural-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Данные профиля:</h3>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• Фамилия, имя, отчество</li>
                    <li>• Контактная информация (email, телефон)</li>
                    <li>• Профессиональная информация (резюме, навыки, опыт)</li>
                    <li>• Фотографии и видео-материалы</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Eye className="w-6 h-6 text-neural-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Данные об использовании:</h3>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• История взаимодействий с Платформой</li>
                    <li>• Предпочтения и настройки</li>
                    <li>• Техническая информация (IP-адрес, браузер, устройство)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Data Processing */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Цели обработки персональных данных</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Основные цели:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Предоставление услуг Платформы</li>
                  <li>• Подбор талантов и вакансий</li>
                  <li>• Обеспечение безопасности пользователей</li>
                  <li>• Улучшение качества услуг</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Дополнительные цели:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Техническая поддержка</li>
                  <li>• Аналитика и статистика</li>
                  <li>• Соответствие законодательству</li>
                  <li>• Предотвращение мошенничества</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Меры защиты персональных данных</h2>
            <div className="flex items-start space-x-3">
              <Lock className="w-6 h-6 text-neural-blue mt-1 flex-shrink-0" />
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  Мы принимаем необходимые правовые, организационные и технические меры для защиты персональных данных от
                  неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, предоставления,
                  распространения, а также от иных неправомерных действий.
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Шифрование данных при передаче и хранении</li>
                  <li>• Контроль доступа к персональным данным</li>
                  <li>• Регулярное обновление систем безопасности</li>
                  <li>• Обучение персонала вопросам защиты данных</li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Rights */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Права субъектов персональных данных</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              В соответствии с законодательством Республики Беларусь, вы имеете право:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="text-gray-700 space-y-2">
                <li>• Получать информацию об обработке ваших данных</li>
                <li>• Требовать уточнения, блокирования или уничтожения данных</li>
                <li>• Отзывать согласие на обработку данных</li>
                <li>• Обжаловать действия или бездействие оператора</li>
              </ul>
              <ul className="text-gray-700 space-y-2">
                <li>• Получать копию обрабатываемых данных</li>
                <li>• Требовать прекращения обработки данных</li>
                <li>• Обращаться в уполномоченный орган</li>
                <li>• Требовать возмещения ущерба</li>
              </ul>
            </div>
          </section>

          {/* Data Retention */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Сроки хранения персональных данных</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Персональные данные хранятся в течение срока, необходимого для достижения целей их обработки,
              а также в течение срока, установленного законодательством Республики Беларусь.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Сроки хранения:</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Активные профили: до удаления аккаунта</li>
                <li>• Данные об использовании: 1 год</li>
                <li>• Технические логи: 1 год</li>
              </ul>
            </div>
          </section>

          {/* Changes */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Изменения в Политике</h2>
            <p className="text-gray-700 leading-relaxed">
              Мы оставляем за собой право вносить изменения в настоящую Политику. В случае внесения существенных изменений
              мы уведомим вас об этом через Платформу или по электронной почте. Продолжение использования Платформы после
              внесения изменений означает согласие с новой версией Политики.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}

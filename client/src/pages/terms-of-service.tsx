import { motion } from "framer-motion";
import { ArrowLeft, FileText, Users, Shield, CreditCard, AlertTriangle } from "lucide-react";
import { useLocation } from "wouter";

export default function TermsOfService() {
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
            <FileText className="w-8 h-8 text-neural-blue" />
            <h1 className="text-3xl font-bold text-gray-900">Пользовательское соглашение</h1>
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
                      Настоящее Пользовательское соглашение (далее - «Соглашение») регулирует отношения между платформой ProxiD
        (далее - «Платформа», «мы», «нас», «наш») и пользователями (далее - «Пользователь», «вы», «ваш»)
              в соответствии с законодательством Республики Беларусь.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Используя Платформу, вы подтверждаете, что ознакомились с условиями настоящего Соглашения,
              принимаете их и обязуетесь соблюдать.
            </p>
          </section>

          {/* Service Description */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Описание услуг</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                ProxiD - это платформа для обмена талантами, которая предоставляет следующие услуги:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Для соискателей:</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Создание профессионального профиля</li>
                    <li>• Поиск вакансий и проектов</li>
                    <li>• Взаимодействие с работодателями</li>
                    <li>• Получение предложений о работе</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Для работодателей:</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Размещение вакансий и проектов</li>
                    <li>• Поиск и подбор талантов</li>
                    <li>• Управление процессом найма</li>
                    <li>• Аналитика и отчеты</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* User Registration */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Регистрация и аккаунт</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-neural-blue mt-1 flex-shrink-0" />
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Требования к регистрации:</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Достижение 18 лет или согласие законных представителей</li>
                    <li>• Предоставление достоверной информации</li>
                    <li>• Соблюдение правил Платформы</li>
                    <li>• Подтверждение email адреса</li>
                  </ul>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-1">Важно:</h4>
                    <p className="text-yellow-700 text-sm">
                      Вы несете ответственность за сохранность данных для входа в аккаунт и за все действия,
                      совершенные с использованием вашего аккаунта.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* User Obligations */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Обязанности пользователей</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                При использовании Платформы вы обязуетесь:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="text-gray-700 space-y-2">
                  <li>• Предоставлять достоверную информацию</li>
                  <li>• Соблюдать законодательство</li>
                  <li>• Не нарушать права других пользователей</li>
                  <li>• Не использовать Платформу для незаконной деятельности</li>
                </ul>
                <ul className="text-gray-700 space-y-2">
                  <li>• Не передавать доступ к аккаунту третьим лицам</li>
                  <li>• Не распространять вредоносное ПО</li>
                  <li>• Не спамить и не флудить</li>
                  <li>• Уважать конфиденциальность других</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Prohibited Activities */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Запрещенные действия</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                На Платформе запрещено:
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <ul className="text-red-700 space-y-2">
                  <li>• Размещение незаконного контента</li>
                  <li>• Нарушение авторских прав</li>
                  <li>• Мошенничество и обман</li>
                  <li>• Дискриминация по любым признакам</li>
                  <li>• Спам и реклама без разрешения</li>
                  <li>• Попытки взлома или нарушения безопасности</li>
                </ul>
              </div>
              <p className="text-gray-600 text-sm">
                Нарушение данных правил может привести к ограничению доступа к Платформе или удалению аккаунта.
              </p>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Условия оплаты</h2>
            <div className="flex items-start space-x-3">
              <CreditCard className="w-6 h-6 text-neural-blue mt-1 flex-shrink-0" />
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  Платформа предлагает как бесплатные, так и платные услуги. Условия оплаты:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>• Цены указываются в белорусских рублях (BYN)</li>
                  <li>• Оплата производится через безопасные платежные системы</li>
                  <li>• Возврат средств осуществляется в соответствии с законодательством</li>
                  <li>• Изменение тарифов возможно с предварительным уведомлением</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Интеллектуальная собственность</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                Все права на Платформу, включая программное обеспечение, дизайн, контент и торговые марки,
                принадлежат ProxiD или используются по лицензии.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Права пользователей:</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Использование Платформы в личных целях</li>
                    <li>• Создание и размещение собственного контента</li>
                    <li>• Справедливое использование в рамках закона</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Запрещено:</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Копирование программного кода</li>
                    <li>• Воспроизведение дизайна</li>
                    <li>• Использование торговых марок</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Liability */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Ответственность сторон</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">Ответственность ProxiD:</h3>
                <ul className="text-blue-700 space-y-1">
                  <li>• Обеспечение работоспособности Платформы</li>
                  <li>• Защита персональных данных пользователей</li>
                  <li>• Соблюдение законодательства</li>
                  <li>• Предоставление технической поддержки</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="font-semibold text-orange-800 mb-2">Ответственность пользователей:</h3>
                <ul className="text-orange-700 space-y-1">
                  <li>• Достоверность предоставляемой информации</li>
                  <li>• Соблюдение условий Соглашения</li>
                  <li>• Уважение прав других пользователей</li>
                  <li>• Соблюдение законодательства</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Прекращение действия Соглашения</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Соглашение может быть прекращено:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">По инициативе пользователя:</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Удаление аккаунта</li>
                  <li>• Отказ от использования услуг</li>
                  <li>• Письменное уведомление</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">По инициативе ProxiD:</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Нарушение условий Соглашения</li>
                  <li>• Неправомерная деятельность</li>
                  <li>• Прекращение работы Платформы</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Changes */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Изменения в Соглашении</h2>
            <p className="text-gray-700 leading-relaxed">
              Мы оставляем за собой право вносить изменения в настоящее Соглашение. О существенных изменениях
              мы уведомим вас через Платформу или по электронной почте. Продолжение использования Платформы
              после внесения изменений означает согласие с новой версией Соглашения.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}

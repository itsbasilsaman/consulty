"use client";

import { useState } from "react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How secure is my data with Healix?",
      answer:
        "Your privacy is our top priority. Healix uses advanced encryption to protect your data, and you have full control over.",
    },
    {
      question: "Can I use Healix without any wearable devices?",
      answer:
        "Yes, you can use Healix without wearable devices. While our platform integrates with wearables for a more detailed analysis of your health metrics, you can still access many of our features, such as tracking your nutrition, setting wellness goals, and using our educational resources, all without the need for any additional hardware.",
    },
    {
      question: "What's included in the doctor chat support?",
      answer:
        "The doctor chat support feature offers you direct access to healthcare professionals for personalized advice and guidance.The service is designed to be a convenient, supportive way to enhance your health journey, though it's important to note that it does not replace in-person medical consultations for serious or urgent issues.",
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. We offer flexible subscription options to suit your needs, whether you want to access more advanced features or adjust to a plan that better fits your current goals. When you make changes to your plan, the update will take effect at the beginning of the next billing cycle, and you'll only be charged for the new plan accordingly. You can easily manage your plan through your account settings or contact customer support for assistance.",
    },
    {
      question: "Does Healix offer a free trial?",
      answer:
        "Yes, Healix offers a free trial to new users. You can sign up to explore the features and benefits of the platform without any initial cost. This allows you to experience how Healix can help you manage your health and wellness goals before committing to a subscription.",
    },
  ];

  // SVGs for plus and minus
  const PlusIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
  );
  const MinusIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24"><path d="M5 12h14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
  );

  return (
    <section className="faq-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="faq-wrapper">
          <div className="faq-left-block">
            <h2>Frequently asked questions<br /></h2>
            <p>For any unanswered questions, reach out to our support team via email. We'll respond as soon as
              possible to assist you.<br /></p>
          </div>
          <div className="faq-list-wrapper">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <div 
                  className="faq-header" 
                  onClick={() => toggleFaq(index)}
                >
                  <p className="faq-question">{item.question}</p>
                  <div className="faq-item-icon">
                    {activeIndex === index ? MinusIcon : PlusIcon}
                  </div>
                </div>
                {activeIndex === index && (
                  <div className="faq-item-content">
                    <p className="faq-item-content-p">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
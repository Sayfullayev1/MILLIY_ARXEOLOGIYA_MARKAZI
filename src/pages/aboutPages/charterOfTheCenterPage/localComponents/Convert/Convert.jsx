import { useEffect, useState } from "react";
import mammoth from "mammoth";
import "./convert.scss";

export default function Convert({ language }) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    // 1. Сначала определяем путь к файлу в зависимости от языка
    let currentFayl = "";
    
    if (language === "uz") {
      currentFayl = "/infoFolder/charterOfTheCenterPageDocuments/NIZOM_ANTROPOLOGIYA_INSTITUT.docx";
    } else if (language === "ru") {
      currentFayl = "/infoFolder/charterOfTheCenterPageDocuments/NIZOM_ANTROPOLOGIYA_INSTITUT.docx";
    } else {
      currentFayl = "/infoFolder/charterOfTheCenterPageDocuments/NIZOM_ANTROPOLOGIYA_INSTITUT.docx";
    }

    // 2. Теперь загружаем этот файл
    setHtml(""); // Очищаем старый текст перед загрузкой нового
    
    fetch(currentFayl)
      .then((res) => {
        if (!res.ok) throw new Error("Файл не найден");
        return res.arrayBuffer();
      })
      .then((buffer) => mammoth.convertToHtml({ arrayBuffer: buffer }))
      .then((result) => {
        setHtml(result.value);
      })
      .catch((err) => {
        console.error("Ошибка загрузки документа:", err);
        setHtml("<p>Ошибка загрузки документа</p>");
      });
      
  }, [language]); // Массив зависимостей: перезапускать при смене языка

  return (
    <div className="doc-wrapper">
      {html ? (
        <div className="doc" dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <p>Загрузка документа...</p>
      )}
    </div>
  );
}

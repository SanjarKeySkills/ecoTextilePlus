import React from "react";
import styles from "./welcomeBlock.module.css";

const WelcomeBlock = () => {
    return (
        <div className={styles.welcome}>
            <div className={styles.welcomeWrapper}>
                <h4>ДОБРО ПОЖАЛОВАТЬ</h4>
                <p className={styles.welcomeText}>
                    Приветствуем вас от имени компании ОсОО "Дукастомс"! Мы
                    гордимся тем, что являемся частью движения за экологически
                    чистое будущее. Наша компания специализируется на
                    переработке отходов швейной отрасли, и наша цель — не только
                    сократить негативное воздействие на окружающую среду, но и
                    предложить эффективное решение для минимизации смога в
                    городах. <br /> <br />
                    Мы стремимся перерабатывать текстильные отходы без сжигания,
                    превращая их в востребованные экологически чистые материалы,
                    которые могут быть использованы в различных отраслях.
                    <br /> <br /> Мы заботимся о здоровье граждан и активно
                    работаем на благо экологии, обеспечивая чистоту нашего
                    воздуха и Земли для будущих поколений.
                    <br /> <br />С нами будущее становится более зеленым!
                </p>
                <div>
                    <p className={styles.annotation}>
                        Данный проект разрабатывается компанией ОсОО
                        "Дукастомс", которая является лидером в области
                        переработки отходов швейной отрасли. Мы стремимся
                        предложить инновационные и экологически безопасные
                        решения для переработки текстильных отходов, превращая
                        их в полезные материалы, которые могут быть использованы
                        повторно. Этот проект направлен на улучшение
                        экологической ситуации, снижение смога в городах и
                        уменьшение воздействия на окружающую среду, обеспечивая
                        будущее без отходов.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WelcomeBlock;

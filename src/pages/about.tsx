import * as React from "react";
import Navbar from "../components/navbar";

// styles
const pageStyles = {
  color: "#232129",
  padding: "2em",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

export interface IAboutPageProps {}

export default function AboutPage(props: IAboutPageProps) {
  return (
    <Navbar pageTitle="About">
      <article>
        <section className="py-10">
          <h2 className="py-3 text-2xl">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            facere facilis at inventore sunt odio provident! Animi, suscipit nam
            aliquam praesentium vitae voluptates cupiditate sed porro quisquam
            necessitatibus similique ipsam omnis, atque perspiciatis voluptatum
            consequuntur autem deserunt in eius ducimus.
          </p>
          <p className="py-3">
            Mollitia explicabo adipisci provident recusandae a inventore facere
            sint laudantium repudiandae, quas eum! Error distinctio quaerat
            officiis nesciunt non placeat amet consequatur, doloribus quis
            cupiditate, minima rem. Est quisquam molestiae exercitationem ipsa
            aspernatur sed, animi similique magni debitis enim repellat!
          </p>
          <p className="py-3">
            Modi veritatis laboriosam ut rem dignissimos perspiciatis iusto
            autem ratione laborum adipisci. Nemo, consequatur officia
            reprehenderit architecto eos exercitationem velit deleniti eveniet
            possimus tenetur nam aliquam soluta sequi magnam, quam, incidunt
            perspiciatis corrupti! Sequi eveniet iste neque maiores, nobis
            repudiandae.
          </p>
        </section>
        <section className="py-10">
          <h2 className="py-3 text-2xl">
            Error voluptates veniam sunt consequatur voluptatibus?
          </h2>
          <p className="py-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            ipsum corrupti doloremque! In nostrum animi quidem hic deserunt,
            voluptatibus ullam facilis sequi possimus maiores labore adipisci
            mollitia iure consequatur eum qui minima provident iusto,
            doloremque, quam laboriosam omnis. Consequuntur, nesciunt.
          </p>
          <p className="py-3">
            Fuga eius praesentium ea rerum, dicta quibusdam. Dicta quas quos
            libero. Distinctio, a beatae odio accusantium fugit possimus
            voluptate unde esse, animi molestias suscipit? Laborum atque
            voluptate cum rerum, officiis non reiciendis expedita nisi.
            Quibusdam perspiciatis repellat voluptatum molestias id.
          </p>
          <p className="py-3">
            Deleniti dicta, modi laudantium earum repellendus recusandae vel
            iusto iste atque! Porro accusamus numquam harum, repellat fuga
            voluptate, veritatis mollitia voluptatem aliquam alias quam quos
            velit corrupti, officia ipsa est libero vitae tempore aliquid.
            Tempora laboriosam architecto ab sapiente reiciendis?
          </p>
        </section>
        <section className="py-10">
          <h2 className="py-3 text-2xl">
            Placeat sit quos reiciendis reprehenderit maiores?
          </h2>
          <p className="py-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, nam
            delectus tempora cumque libero nulla dolor maxime magni amet
            cupiditate, vitae fugiat est sequi dolorum consectetur at vel
            officiis magnam. Voluptate delectus aliquid officiis. Dicta, amet
            nesciunt. Sint, in dolorem.
          </p>
          <p className="py-3">
            Tempora quia eligendi et totam! Eum laboriosam iste molestias, enim
            fugit vel aut voluptatum fugiat sequi, perferendis animi praesentium
            harum nisi iure maiores. Aut excepturi qui dolorum repellendus,
            accusamus, aperiam nam odit neque ipsa molestias iusto animi optio
            magni quam.
          </p>
          <p className="py-3">
            Corrupti nihil similique ipsa sequi eos doloribus deserunt fugit
            impedit sit, ab obcaecati? Quos cupiditate odit soluta animi placeat
            libero officiis laudantium exercitationem magni quis in ullam saepe
            enim amet, nam sapiente doloremque omnis! Sit dolorem necessitatibus
            ipsum sunt atque.
          </p>
        </section>
        <section className="py-10">
          <h2 className="py-3 text-2xl">
            Asperiores a illo aperiam fuga iste?
          </h2>
          <p className="py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis dignissimos id necessitatibus sed quaerat vero, velit
            ipsam repellendus molestiae beatae, sint nam fuga voluptate alias.
            Quidem magni asperiores deleniti totam quasi, consectetur nisi minus
            iste quod mollitia provident distinctio facilis!
          </p>
          <p className="py-3">
            Deleniti sit tenetur corporis adipisci magnam error excepturi
            doloremque! Sed totam facilis pariatur mollitia assumenda
            consequuntur debitis saepe molestias tenetur eum. Corporis a vitae
            alias molestiae ipsum necessitatibus aut? Laboriosam praesentium quo
            sint maxime impedit at quod rem architecto quibusdam.
          </p>
          <p className="py-3">
            Possimus optio, tenetur, aliquam error corrupti velit ipsa
            consectetur minima, nesciunt ea cupiditate. Omnis veniam eligendi
            amet aliquam consequuntur? Facilis vel ut ullam, necessitatibus
            corrupti possimus, repellat libero aspernatur, sed culpa ducimus
            nihil quasi architecto pariatur! Blanditiis praesentium quas quae?
          </p>
        </section>
      </article>
    </Navbar>
  );
}

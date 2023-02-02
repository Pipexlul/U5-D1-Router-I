import Form from "../components/Form";
import FormItem from "../components/FormItem";

const Contact = () => {
  return (
    <main className="bg-gray-900">
      <Form
        title="¡Contáctanos!"
        description="Cuentanos sobre tu experiencia en Panshito Con Quesho, tus
          recomendaciones o criticas. ¿O tal vez tienes una idea para un nuevo
          sandwich? ¡Te escuchamos!"
      >
        <FormItem
          labelText="Email"
          type="input"
          inputType="email"
          placeholder="nombre@gmail.com"
          id="email"
          required={true}
        />
        <FormItem
          labelText="Asunto"
          type="input"
          inputType="text"
          placeholder="Recomendación, critica, idea, etc..."
          id="about"
          required={true}
        />
        <FormItem
          labelText="Escribe tu mensaje"
          type="textarea"
          placeholder="Deja un comentario"
          id="message"
          required={true}
        />
      </Form>
    </main>
  );
};

export default Contact;

import React from "react";
import "./FormOutils.css";

const FormCollab = () => {
  return (
    <div>
      <h1>Ajout des collaborateurs</h1>
      <form class="form-style-9">
        <ul>
          <li>
            <input
              type="text"
              name="field1"
              class="field-style field-split align-left"
              placeholder="Nom"
            />
            <input
              type="email"
              name="field2"
              class="field-style field-split align-right"
              placeholder="Prénom"
            />
          </li>
          <li>
            <input
              type="text"
              name="field3"
              class="field-style field-split align-left"
              placeholder="Rôle"
            />
            <input
              type="url"
              name="field4"
              class="field-style field-split align-right"
              placeholder="Email"
            />
          </li>
          <li>
            <input
              type="text"
              name="field3"
              class="field-style field-full align-none"
              placeholder="Mission"
            />
          </li>
          <li></li>
          <li>
            <input type="submit" value="Envoyer" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default FormCollab;

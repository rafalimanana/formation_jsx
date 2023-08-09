import { C } from "vue/helper/V02Component.jsx";
import classNames from "classnames";

export default C.make({
  $render(h, instance) {
    var { config } = this;
    var {
      taches = [],
    } = config;
    return (
      <div>
        <h2>Liste des tâches</h2>
        <ul>
          {taches.map(tache => (
            <li key={tache.id}>
              <h3>{tache.titre}</h3>
              <p>{tache.description}</p>
              <p>Date d'échéance : {tache.dateEcheance}</p>
            </li>
          ))}
        </ul>
    </div>
    );
  },
});
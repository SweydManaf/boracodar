import { PlusIcon } from "lucide-react";
import "./styles.css";

export default function Form() {
  return (
    <div className="form">
      <div className="item-name">
        <label htmlFor="name">Item</label>
        <input type="text" />
      </div>

      <div className="quantity-container">
        <div>
          <label htmlFor="name">Quantidade</label>
          
          <input
            type="text"
            style={{
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "0px",
            }}
          />
        </div>

        <div className="select">
          <div id="category-select">
            <input type="checkbox" id="options-view-button" />
            <div
              id="select-button"
              style={{
                borderTopLeftRadius: "0px",
                borderBottomLeftRadius: "0px",
              }}
            >
              <div id="selected-value">Un.</div>
              <div id="chevrons">
                <i data-lucide="chevron-down"></i>
                <i data-lucide="chevron-up"></i>
              </div>
            </div>
          </div>

          <ul id="options">
            <li className="option">
              <input
                type="radio"
                name="category"
                value="unity"
                data-label="Un."
              />
              <span className="label">Un.</span>
              <i data-lucide="check"></i>
            </li>

            <li className="option">
              <input
                type="radio"
                name="category"
                value="litres"
                data-label="L"
              />
              <span className="label">L</span>
              <i data-lucide="check"></i>
            </li>

            <li className="option">
              <input type="radio" name="category" value="kg" data-label="Kg" />
              <span className="label">Kg</span>
              <i data-lucide="check"></i>
            </li>
          </ul>
        </div>
      </div>

      <div className="select">
        <div id="category-select">
          <label htmlFor="options-view-button">Categoria</label>
          <input type="checkbox" id="options-view-button" />

          <div id="select-button">
            <div id="selected-value">Selecione a categoria</div>

            <div id="chevrons">
              <i data-lucide="chevron-down"></i>
              <i data-lucide="chevron-up"></i>
            </div>
          </div>
        </div>

        <ul id="options">
          <li className="option">
            <input
              type="radio"
              name="category"
              value="bakery"
              data-label="Padaria"
            />

            <i data-lucide="sandwich"></i>
            <span className="label">Padaria</span>
            <i data-lucide="check"></i>
          </li>

          <li className="option">
            <input
              type="radio"
              name="category"
              value="vegetable"
              data-label="Legume"
            />

            <i data-lucide="carrot"></i>
            <span className="label">Legume</span>
            <i data-lucide="check"></i>
          </li>

          <li className="option">
            <input
              type="radio"
              name="category"
              value="meat"
              data-label="Carne"
            />

            <i data-lucide="beef"></i>
            <span className="label">Carne</span>
            <i data-lucide="check"></i>
          </li>

          <li className="option">
            <input
              type="radio"
              name="category"
              value="fruit"
              data-label="Fruta"
            />

            <i data-lucide="apple"></i>
            <span className="label">Fruta</span>
            <i data-lucide="check"></i>
          </li>

          <li className="option">
            <input
              type="radio"
              name="category"
              value="drink"
              data-label="Bebida"
            />

            <i data-lucide="milk"></i>
            <span className="label">Bebida</span>
            <i data-lucide="check"></i>
          </li>
        </ul>
      </div>

      <PlusIcon className="add-button" />
    </div>
  );
}

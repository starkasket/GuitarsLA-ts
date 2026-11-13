import { useState } from "react";
import './GuitarForm.css';

export default function GuitarForm({ addGuitar }: GuitarFormProps) {

    const [form, setForm] = useState({
        name: '',
        price: '',
        description: '',
        image: ''
    });

    const [error, setError] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        if (Object.values(form).some(value => value.trim() === '')) {
            setError('Todos los campos son obligatorios');
            return;
        }

        const price = Number(form.price);

        if (!Number.isFinite(price) || price <= 0) {
            setError('El precio debe ser mayor a cero');
            return;
        }

        try {

            await addGuitar({
                ...form,
                price
            });

            setForm({
                name: '',
                price: '',
                description: '',
                image: ''
            });

            setError('');

        } catch (error) {
            setError('No se pudo registrar la guitarra');
            console.log(error);
        }
    }

return (
    <section className="guitar-form-container">

        <div className="guitar-form">

            <div className="guitar-form-header">
                <h2>Registrar guitarra</h2>
                <p>Agrega una nueva guitarra a nuestra colección.</p>
            </div>

            <form onSubmit={handleSubmit}>

                <div className="guitar-form-grid">

                    <div className="guitar-form-group">
                        <label>Nombre de la guitarra</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Ej. Fender Stratocaster"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="guitar-form-group">
                        <label>Precio</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="0.00"
                            min="0.01"
                            step="0.01"
                            value={form.price}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="guitar-form-group full-width">
                        <label>Imagen</label>
                        <input
                            type="text"
                            name="image"
                            placeholder="Ej. guitarra_04"
                            value={form.image}
                            onChange={handleChange}
                            required
                        />
                        <span className="guitar-form-hint">
                            Escribe el nombre de la imagen sin la extensión .jpg.
                        </span>
                    </div>

                    <div className="guitar-form-group full-width">
                        <label>Descripción</label>
                        <textarea
                            name="description"
                            placeholder="Describe las características de la guitarra..."
                            value={form.description}
                            onChange={handleChange}
                            required
                        />
                    </div>

                </div>

                {error && (
                    <p className="guitar-form-error">{error}</p>
                )}

                <button
                    type="submit"
                    className="guitar-form-button"
                >
                    Registrar guitarra
                </button>

            </form>

        </div>

    </section>
);


}

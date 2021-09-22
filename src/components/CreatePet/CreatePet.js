import * as petsService from '../../services/petsService';

const CreatePet = ({
    history,
}) => {

    const onCreatePetSubmitHandler = (e) => {
        e.preventDefault();

        const { name, description, imageURL, category } = e.target;

        petsService.create(name.value, description.value, imageURL.value, category.value)
            .then(() => {
                history.push('/')
            })
    }

    return (
        <section class="create">
            <form onSubmit={onCreatePetSubmitHandler}>
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p class="field">
                        <label htmlFor="name">Name</label>
                        <span class="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                            <span class="actions"></span>
                        </span>
                    </p>
                    <p class="field">
                        <label htmlFor="description">Description</label>
                        <span class="input">
                            <textarea rows="4" cols="45" type="text" name="description" id="description"
                                placeholder="Description"></textarea>
                            <span class="actions"></span>
                        </span>
                    </p>
                    <p class="field">
                        <label htmlFor="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageURL" id="image" placeholder="Image" />
                            <span class="actions"></span>
                        </span>
                    </p>
                    <p class="field">
                        <label htmlFor="category">Category</label>
                        <span class="input">
                            <select type="text" name="category">
                                <option value="Cat">Cat</option>
                                <option value="Dog">Dog</option>
                                <option value="Parrot">Parrot</option>
                                <option value="Reptile">Reptile</option>
                                <option value="Other">Other</option>
                            </select>
                            <span class="actions"></span>
                        </span>
                    </p>
                    <input class="button" type="submit" class="submit" value="Add Pet" />
                </fieldset>
            </form>
        </section>
    );

};

export default CreatePet;
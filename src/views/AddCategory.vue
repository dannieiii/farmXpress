<template>
    <div class="add-category">
        <div class="header">
            <i class="fas fa-arrow-left" @click="cancel"></i>
            <h1>Add Category</h1>
        </div>

        <div class="form-container">
            <div class="section">
                <h2>Category Info</h2>
                <input type="text" placeholder="Category Name" v-model="categoryName" />
                <input type="file" @change="handleImageUpload" />
            </div>
        </div>

        <div class="buttons">
            <button class="cancel" @click="cancel">Cancel</button>
            <button class="save" @click="submitCategory">Save</button>
        </div>
    </div>
</template>

<script>
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const categoryName = ref('');
        const categoryImage = ref(null);
        const addCategory = inject('addCategory');
        const router = useRouter();

        const handleImageUpload = (event) => {
            const file = event.target.files[0];
            if (file) {
                categoryImage.value = URL.createObjectURL(file);
            }
        };

        const submitCategory = () => {
            if (!categoryName.value) {
                alert('Please enter a category name.');
                return;
            }

            addCategory({
                name: categoryName.value,
                image: categoryImage.value,
            });

            categoryName.value = '';
            categoryImage.value = null;
            router.push('/category');
        };

        const cancel = () => {
            router.push('/category');
        };

        return { categoryName, categoryImage, handleImageUpload, submitCategory, cancel };
    }
};
</script>

<style scoped>
.add-category {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #2e5c31;
    color: white;
    padding: 15px;
    border-radius: 10px 10px 0 0;
}

.header i {
    font-size: 20px;
    cursor: pointer;
}

.form-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
}

.section {
    background: white;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h2 {
    margin-bottom: 10px;
    font-size: 18px;
    color: #333;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

.buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.cancel, .save {
    flex: 1;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
}

.cancel {
    background: #888;
    color: white;
}

.cancel:hover {
    background: #666;
}

.save {
    background: #2e5c31;
    color: white;
}

.save:hover {
    background: #256127;
}
</style>

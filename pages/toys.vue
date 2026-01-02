<template>
  <div class="toys-container">
    <h1>Interactive Toys</h1>
    <p>Created with the use of AI-assisted programming.</p>
    <div v-if="pending" class="loading">
      Loading toys...
    </div>
    <div v-else-if="error" class="error">
      Error loading toys: {{ error.message }}
    </div>
    <div v-else class="toys-grid">
      <a
        v-for="toy in toys"
        :key="toy.id"
        :href="toy.path"
        class="toy-item"
        target="_blank"
      >
        <h2>{{ toy.name }}</h2>
        <p class="toy-description">{{ toy.description }}</p>
      </a>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '#app';
import { useFetch } from '#imports';

const { data: toys, pending, error } = await useFetch('/api/toys');

useHead({
  title: 'Interactive Toys | David Straub',
  meta: [
    {
      name: 'description',
      content: 'Collection of interactive web toys and experiments',
    },
  ],
});
</script>

<style scoped>
.toys-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.loading, .error {
  margin-top: 2rem;
  padding: 2rem;
  text-align: center;
  background-color: #f8f8f8;
  border-radius: 8px;
}

.error {
  color: #e53e3e;
}

.toys-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.toy-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.toy-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.toy-description {
  font-size: 0.9rem;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.4;
  height: 3.9em; /* Fallback for non-WebKit browsers */
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
</style>

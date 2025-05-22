<template>
    <div class="relative">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" v-if="icon">
        <component :is="icon" class="h-5 w-5 text-gray-400" />
      </div>
      
      <input
        :type="inputType"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
        :placeholder="placeholder"
        :class="{ 'pl-3': !icon }"
      />
      
      <div v-if="showPasswordToggle && type === 'password'" class="absolute inset-y-0 right-0 pr-3 flex items-center">
        <button
          type="button"
          @click="togglePasswordVisibility"
          class="text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
            />
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
            />
          </svg>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const props = defineProps({
    modelValue: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    icon: {
      type: [Object, Function],
      default: null
    },
    showPasswordToggle: {
      type: Boolean,
      default: false
    }
  });
  
  defineEmits(['update:modelValue']);
  
  const showPassword = ref(false);
  
  const inputType = computed(() => {
    if (props.type === 'password' && showPassword.value) {
      return 'text';
    }
    return props.type;
  });
  
  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
  };
  </script>
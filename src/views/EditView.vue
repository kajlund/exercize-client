<script setup>
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';
import { object, string, date, number } from 'yup';

import BaseInput from '@/components/BaseInput.vue';
import BaseTextarea from '@/components/BaseTextarea.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseButton from '@/components/BaseButton.vue';
import ActivityService from '@/services/ActivityServices.js';

const kindsOfActivities = ref([
  'Badminton',
  'Cycling',
  'Other Activities',
  'Outdoor Walking',
  'Running',
  'Strength Training',
  'Swimming',
  'Threadmill',
  'Trailrunning',
  'Trekking',
]);

const validationSchema = object({
  kind: string().required('Kind is required').oneOf(kindsOfActivities.value),
  when: date().required('When is required'),
  title: string().required('Title is required').min(3),
  description: string(),
  durationHH: number().required('Duration hh is required').min(0).max(99),
  durationMM: number().required('Duration mm is required').min(0).max(59),
  durationSS: number().required('Duration ss is required').min(0).max(59),
  distance: number(),
  elevation: number(),
  calories: number(),
});

const { handleSubmit, errors } = useForm({
  validationSchema,
  initialValues: {
    kind: '',
    when: new Date().toISOString().slice(0, 10),
    title: '',
    description: '',
    durationHH: 0,
    durationMM: 0,
    durationSS: 0,
    distance: 0,
    elevation: 0,
    calories: 0,
  }
});

let { value: kind } = useField('kind');
let { value: when } = useField('when');
let { value: title } = useField('title');
let { value: description } = useField('description');
let { value: durationHH } = useField('durationHH');
let { value: durationMM } = useField('durationMM');
let { value: durationSS } = useField('durationSS');
let { value: distance } = useField('distance');
let { value: elevation } = useField('elevation');
let { value: calories } = useField('calories');

const submit = handleSubmit(async (values) => {
  console.log('Validated values:', values);
  const duration = `${String(values.durationHH).padStart(2, '0')}:${String(values.durationMM).padStart(2, '0')}:${String(values.durationSS).padStart(2, '0')}`;
  values.duration = duration;
  delete values.durationHH;
  delete values.durationMM;
  delete values.durationSS;
  try {
    const response = await ActivityService.createActivity(values);
    console.log('Activity created successfully:', response);
  } catch (error) {
    console.error('Error creating activity:', error);
  }
});

</script>

<template>
  <h1>Create Activity</h1>

  <form @submit.prevent="submit">

    <fieldset>
      <legend>Basic Information</legend>
      <BaseSelect
        :options="kindsOfActivities"
        label="Kind"
        v-model="kind"
        :error="errors.kind"
      />
      <BaseInput
        name="date"
        type="date"
        label="When"
        v-model="when"
        :error="errors.when"
      />
      <BaseInput
        type="text"
        label="Title"
        v-model="title"
        :error="errors.title"
      />
      <BaseTextarea
        type="text"
        label="Description"
        v-model="description"
        :error="errors.description"
      />
    </fieldset>

    <fieldset class="duration">
      <legend>Time</legend>
      <BaseInput
        type="number" min="0" max="99"
        label="hh"
        v-model="durationHH"
        :error="errors.durationHH"
      />
      <BaseInput
        type="number" min="0" max="59"
        label="mm"
        v-model="durationMM"
        :error="errors.durationMM"
      />
      <BaseInput
        type="number" min="0" max="59"
        label="ss"
        v-model="durationSS"
        :error="errors.durationSS"
      />
    </fieldset>
    <fieldset>
      <legend>Other</legend>
      <BaseInput
        type="number"
        label="Distance"
        v-model="distance"
        :error="errors.distance"
      />
      <BaseInput
        type="number"
        label="Elevation"
        v-model="elevation"
        :error="errors.elevation"
      />
      <BaseInput
        type="number"
        label="Calories"
        v-model="calories"
        :error="errors.calories"
      />
      <!--
      <BaseCheckbox
        label="Indoors"
        v-model="activity.indoors"
      />
      <BaseRadioGroup
        name="environment"
        label="Environment"
        :options="environments"
        v-model="activity.environment"
      /> -->
    </fieldset>

    <fieldset class="commands">
      <BaseButton type="submit">Create Activity</BaseButton>
    </fieldset>
  </form>
</template>

<style scoped>
legend {
  margin-right: auto;
}

fieldset.duration {
  flex-direction: row;
  justify-content: space-between;
}

fieldset.duration .form-group {
  max-width: 25%;

}
</style>

<template>
	<div id="addPeople">
		<addPeopleForm/>
    	<addPeopleTable/>
	</div>
</template>

<script type="text/javascript">

import addPeopleForm from '../components/addPeopleForm'
import addPeopleTable from '../components/addPeopleTable'

export default {
	name: 'addPeople',
  	components: {
	    addPeopleForm,
	    addPeopleTable
  	}
}

</script>

<style scoped>
	
</style>
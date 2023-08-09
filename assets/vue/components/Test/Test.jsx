import { C } from "vue/helper/V02Component.jsx";
import Extend from 'vue/components/Extend/Extend.jsx';
import ListItem from 'vue/components/ListItem/ListItem.jsx';
import { TestExtend } from 'classes/TestExtend.js';
import classNames from "classnames";
import {waitInput} from "pw-components-core-dev";

import "dropzone/dist/basic.css";
import "dropzone/dist/dropzone.css";
import { Dropzone } from "dropzone";

export default C.make({
    ...TestExtend.getMethodsJsx(),

	initSelect2() {
		var { config } = this;
		var {
			showSearchBar = true,
			selectOption = {}
		} = config;
		var { select } = this.$refs;
		console.log("initSelect2", select)

		var selectConfig = {
			//width: "400px",
			selectionCssClass: "pw_select2",
			dropdownCssClass: "pw_select2",
			
		}

		if(!showSearchBar){
			selectConfig.minimumResultsForSearch = -1;
		}
		selectConfig = {...selectConfig, ...selectOption}

		$(select).select2(selectConfig);

		$(select).off("select2:select");
		$(select).off("select2:unselect");
		$(select).off("select2:clear");
		$(select).on("select2:select", this.handleSelect2);
		$(select).on("select2:unselect", this.handleSelect2);
		$(select).on("select2:clear", this.handleSelect2);
	},
	handleSelect2(event) {
		var { config } = this;
		console.log("config", config)
		var {
			name = "",
			value = "",
			isDirect = false,
		} = config;

		var { select } = this.$refs;
		var value = $(select).val(); // recuperation value
		//Traitement de la selection
	},
	initDropzone() {
		var { config = {} } = this;

		var { pw_dropzone } = this.$refs;

		var cnf = {
			url: window.test_api,
			addRemoveLinks: true,
			dictRemoveFile: "Supprimer",
			dictDefaultMessage: "Veuillez deposer des fichiers ici ...",
			dictMaxFilesExceeded: "Impossible de charger le document",
			dictCancelUpload: "Annuler",
			init: () => {
			},
			removedfile: (file) => {
				file.previewElement.remove();
			},
		};

		var instance = this;
		var dropzone = new Dropzone(pw_dropzone, cnf);

		this.config.dropzone = dropzone;
	},

	onReady() {
		var { ready } = this.config
		if (!ready) {
			this.config.ready = true;
			setTimeout(() => {
				this.initSelect2();
				this.initDropzone();
			}, 200);
		}
	},

	$render(h, instance) {
		var items = ['Item 1', 'Item 2', 'Item 3'];
		var taches = [
		  { id: 1, titre: "Faire les courses", description: "Acheter des légumes et du lait", dateEcheance: "2023-08-15" },
		  { id: 2, titre: "Réunion", description: "Réunion d'équipe à 14h", dateEcheance: "2023-08-10" },
		];
		
		//Ancrage
		var config = this.config
		var {obj={}} = config
		obj['test'] = "Test ok";
		config.obj = obj;


		var { onReady=()=>{} } = this;
		onReady()

		var itemsOptions = () => {
			return items.map((item , index) => {
				return (
			        <Extend 
		                config={{
		                    item,
		                    index
		                }} 
		              />
				)
			})
		}
		var onHandleInput = (event) =>{
			var {currentTarget:input} = event
			waitInput(input, () =>{
				var {value} = input;
				console.log({value})
			}, 100)
		}
		return (
			<div>
				<div
					ref="pw_dropzone"
					class="pw_dropzone dropzone"
				></div>

    			<ListItem config={{taches}} />
				<input
					type="text"
					placeholder="Test"
					name="test"
					class="form-control"
					onInput={onHandleInput}
					onPaste={onHandleInput}
					onKeypress={onHandleInput}
              	/>
				{this.getHelloWorld()}
				<ul>
			      {itemsOptions()}
			    </ul>
				<select
					ref="select"
					name={name}
					class={classNames("pw_select")}
				>
					<option 
						value=""
					>
						Choisir
					</option>
					<option 
						value="test1"
					>
						Test 1
					</option>
					<option 
						value="test2"
					>
						Test 2
					</option>
					<option 
						value="test3"
					>
						Test 3
					</option>

				</select>
			</div>
		);
	},
});
.PHONY: gen_docs_install gen_docs

gen_docs_install:
	@echo "Installing gen docs cli"
	cd ./docs/.scripts/gen_docs && npm install && npm link

gen_docs_run: gen_docs_install
	@echo "Generating docs"
	gen-docs

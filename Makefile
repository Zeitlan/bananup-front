prod:
	docker-compose -f docker-compose-prod.yml pull -q
	docker-compose -f docker-compose-prod.yml up -d

beta:
	docker-compose -f docker-compose-beta.yml pull -q
	docker-compose -f docker-compose-beta.yml up -d

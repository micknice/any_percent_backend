const app = require('../app');
const request = require('supertest');
const database = require('../db/connection');
require('jest-sorted');
const{json} = require('express');

beforeAll(done => {
    done()
  })
  
afterAll(done => {   
    database.close()
    done()
})

// Tests for api/exercises enpoints
describe(' GET /api/exercises', ()=> {
    test('GET req w/ no queries returns an array of all exercises in db', () => {
        return request(app)
        .get('/api/exercises')
        .expect(200)
        .then(res => {
            const resBodyExercises = res.body.exercises;
            expect(resBodyExercises.length).toBe(50)
            resBodyExercises.forEach(exercise => {
                expect(exercise).toMatchObject({
                    _id: expect.any(String),
                    name: expect.any(String),
                    type: expect.any(String),
                    movementType: expect.any(String),
                    bodyPart: expect.any(String),
                    musclesUsed: expect.any(Array),
                })               
            });
            
        })
    })
    test('GET req w/ queries returns array of exercises filtered by query', () => {
        return request(app)
        .get('/api/exercises?type=Isolation&movementType=Push&bodyPart=Chest')
        .expect(200)
        .then(res => {
            const resBodyExercises = res.body.exercises;
            resBodyExercises.forEach(exercise => {
                expect(exercise.type).toBe('Isolation')
                expect(exercise.movementType).toBe('Push')
                expect(exercise.bodyPart).toBe('Chest')                             
            });
            
        })
    })
    // test('Get req w/ params returns exercise with specified name', () => {
    //     return request(app)
    //     .get('api/exercises/Barbell Bicep Curls')
    //     .expect(200)
    //     .then(res => {
    //         const exercise = res.body.exercise
    //         expect(exercise.name).toBe('Bicep Barbell Curls')
    //     })
    // })
})


const app = require('../app');
const request = require('supertest');
const database = require('../db/connection');
require('jest-sorted');
const{json} = require('express');
// const {seedDb} = require('../seed/seed');

beforeAll(done => {
    done()
  })
 
afterAll(done => {   
    database.close()
    done()
})

// Tests for api/exercises endpoints
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
    test('Get req w/ params returns exercise with specified name', () => {
        return request(app)
        .get('/api/exercises/Barbell Bicep Curls')
        .expect(200)
        .then(res => {
            const resBodyExercise = res.body.exercise;
            expect(resBodyExercise.name).toBe('Barbell Bicep Curls')            
        })
    })
})

describe('api/exercises error handling ', () => {
    test('get req with invalid exercise name param returns 400 status and and invalid exercise name msg', () => {
        return request(app)
        .get('/api/exercises/boobelBarcepcrul')
        .expect(400)
        .then(res => {
            const msg = res.body.msg
            expect(msg).toBe('invalid exercise name')
        })
    })
    test('get req with invalid type query returns 400 status and invalid type query msg', () => {
        return request(app)
        .get('/api/exercises?type=invalid')
        .expect(400)
        .then(res => {
            const msg = res.body.msg;
            expect(msg).toBe('invalid type field')
        })
    })
    test('get req with invalid movementType query returns 400 status and invalid movementType query msg', () => {
        return request(app)
        .get('/api/exercises?movementType=invalid')
        .expect(400)
        .then(res => {
            const msg = res.body.msg;
            expect(msg).toBe('invalid movementType field')
        })
    })
    test('get req with invalid bodyPart query returns 400 status invalid type query', () => {
        return request(app)
        .get('/api/exercises?bodyPart=invalid')
        .expect(400)
        .then(res => {
            const msg = res.body.msg;
            expect(msg).toBe('invalid bodyPart field')
        })
    })
    test('get req with more than one invalid query fields returns 400 status invalid query fields msg', () => {
        return request(app)
        .get('/api/exercises?bodyPart=invalid&type=invalid')
        .expect(400)
        .then(res => {
            const msg = res.body.msg;
            expect(msg).toBe('invalid query fields')
        })
        
    })
})

// Tests for api/users endpoints
describe(' GET /api/users', () => {
    test(' GET request w/ no params returns list of all users in db', () => {
        return request(app)
        .get('/api/users')
        .expect(200)
        .then(res => {
            const resBodyUsers = res.body.users
            expect(resBodyUsers.length).toBe(10)
            resBodyUsers.forEach(user => {
                expect(user).toMatchObject({
                    _id: expect.any(String),
                    userUID: expect.any(String),
                    userName: expect.any(String),
                    defaultWeightUnit: expect.any(String),
                })
            })
        })
    })
    test(' GET req w/ valid userUID in param returns 200 status and user object matching UID ', () => {
        return request(app)
        .get('/api/users/osA6t3TkUdG2oVeQp8WrI5yLjHs7')
        .expect(200)
        .then(res => {
            const resBodyUser = res.body.user
            expect(resBodyUser.userUID).toBe('osA6t3TkUdG2oVeQp8WrI5yLjHs7')
        })
    })
    // test(' POST req w/ valid details and unique UID returns 201 status and user object', () => {
    //     return request(app)
    //     .post('/api/users')
    //     .field('userUID', '5zXz4PmHbG83R2PAC6CJY6sVSNe5')
    //     .field('userName', 'TestyWaters')
    //     .field('defaultWeightUnit', 'kg')
    //     .expect(201)
    //     .then(res => {
    //         const resBodyUser = res.body.user
    //         expect(resBodyUser.userUID).toBe('5zXz4PmHbG83R2PAC6CJY6sVSNe5')
    //     })        
    // })
    // test('get all users reflects POST with correct length', () => {
    //     return request(app)
    //     .get('/api/users')
    //     .expect(200)
    //     .then(res => {
    //         const resBodyUsers = res.body.users;
    //         expect(resBodyUsers.length).toBe(11)
    //     })
    // })
})

describe(' /api/users error handling', () => {
    test('get req w/ invalid userUID returns 404 status and user not found msg', () => {
        return request(app)
        .get('/api/users/osA6t3TkUdG2oVeQp8WrI5y')
        .expect(404)
        .then(res => {
            const resBodyMsg = res.body.msg
            expect(resBodyMsg).toBe('user not found')
        })
    })
})
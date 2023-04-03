
const citySchema = mongoose.Schema({
    name: String,
    currentPopulation: Number,
    country : { type: mongoose.Schema.Types.ObjectId, ref: 'countries'},
});
const City = mongoose.model('cities', citySchema);

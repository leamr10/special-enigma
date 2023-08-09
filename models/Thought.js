const { Thought, model } = require('mongoose');
const reactionSchema = require('reaction');
const dayFormat = require("../utils/dayFormat");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    userName: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => dayFormat(date)
    },
    reactions: [
        reactionSchema
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
    return this.reaction.length
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;

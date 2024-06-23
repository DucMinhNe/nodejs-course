// query patterns
const adminCount = await User.countDocuments({ role: 'admin' });
const recent = await User.find({}).sort({ createdAt: -1 }).limit(10);
const user = await User.findById(id);
await User.updateOne({ _id: id }, { $set: { role: 'admin' } });
await User.deleteOne({ _id: id });

// aggregation
const stats = await User.aggregate([
  { $group: { _id: '$role', n: { $sum: 1 } } },
]);
